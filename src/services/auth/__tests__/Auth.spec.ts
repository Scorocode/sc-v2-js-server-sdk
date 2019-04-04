import sc from '../../../index'
import Auth from '../Auth'

const TEST_USER_EMAIL = 'test@mail.mail'
const TEST_USER_PASSWORD = '123456'

beforeAll(async () => {
  const app = sc.initApp()

  try {
    const testUser = await app.auth().getUserByEmail(TEST_USER_EMAIL)

    await app.auth().deleteUserById(testUser.id)
  } catch (e) {
    // nothing do
  }
})

afterAll(() => sc.destroyApp())

describe('Auth service', () => {
  it('Should return Auth service', () => {
    expect(sc.app().auth()).toBeInstanceOf(Auth)
  })
})

describe('Auth service integration tests', () => {
  it('Should get an error', async () => {
    await expect(
      sc
        .app()
        .auth()
        .getUserByEmail(TEST_USER_EMAIL)
    ).rejects.toMatchObject({
      httpCode: 404,
      apiCode: 'not_found',
      message: expect.stringMatching(/user not found/),
    })
  })

  it('Test user and session api', async () => {
    // create user and session
    const user = await sc
      .app()
      .auth()
      .createUser(TEST_USER_EMAIL, TEST_USER_PASSWORD)
    expect(user).toMatchObject({
      id: expect.any(String),
      email: TEST_USER_EMAIL,
      isBlocked: expect.any(Boolean),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    })

    // get user by id
    const userById = await sc
      .app()
      .auth()
      .getUserById(user.id)
    expect(user).toEqual(userById)

    // get user by email
    const userByEmail = await sc
      .app()
      .auth()
      .getUserByEmail(user.email)
    expect(user).toEqual(userByEmail)

    // sign in
    const session = await sc
      .app()
      .auth()
      .signInWithEmailAndPassword(TEST_USER_EMAIL, TEST_USER_PASSWORD)
    expect(session).toMatchObject({
      token: expect.any(String),
      refreshToken: expect.any(String),
      expiresAt: expect.any(Date),
      xsrf: expect.any(String),
      payload: expect.any(Object),
      user: expect.objectContaining({
        id: expect.any(String),
        email: TEST_USER_EMAIL,
        isBlocked: expect.any(Boolean),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      }),
    })

    // getSession
    const _session = await sc
      .app()
      .auth()
      .getSession(session.token)
    expect(session).toMatchObject(_session)

    // get user by token
    const userByToken = await sc
      .app()
      .auth()
      .getUserByToken(session.token)
    expect(user).toEqual(userByToken)

    // refresh session
    const refreshedSession = await sc
      .app()
      .auth()
      .refreshSession(session.refreshToken)
    expect(refreshedSession).toMatchObject({
      token: expect.any(String),
      refreshToken: expect.any(String),
      expiresAt: expect.any(Date),
      xsrf: expect.any(String),
      payload: expect.any(Object),
      user: expect.objectContaining({
        id: expect.any(String),
        email: TEST_USER_EMAIL,
        isBlocked: expect.any(Boolean),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      }),
    })
    expect(refreshedSession.token).not.toEqual(session.token)
    // todo kill old refreshToken on the back side
    // expect(refreshedSession.refreshToken).not.toEqual(session.refreshToken)

    // sign out by token
    await sc
      .app()
      .auth()
      .signOutByToken(refreshedSession.token)
    await expect(
      sc
        .app()
        .auth()
        .getSession(refreshedSession.token)
    ).rejects.toMatchObject({
      httpCode: 404,
      apiCode: 'not_found',
      message: expect.stringMatching(/session not found/),
    })

    // delete user by id
    await sc
      .app()
      .auth()
      .deleteUserById(user.id)
    await expect(
      sc
        .app()
        .auth()
        .getUserById(user.id)
    ).rejects.toMatchObject({
      httpCode: 404,
      apiCode: 'not_found',
      message: expect.stringMatching(/user not found/),
    })
  })
})
