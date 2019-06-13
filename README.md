# Scorocode v2 JS Server SDK

## Установка

```
npm i @scorocode/server-sdk
```

## Разработка

#### Основные команды

- Собрать проект

```
yarn build
```

- Протестировать проект

```
yarn test
```

- Автоформатировать код

```
yarn style:fix
```

## Описание

### Менеджер приложений

Работа с приложением скорокода начинается с менеджера приложений

```javascript
// Менеджер приложений отвечает за инициализацию, хранение и утилизацию приложения
const sc = require('@scorocode/server-sdk').default

// Инициация приложения
const app = sc.initApp()

// Теперь инициированное приложение доступно через менеджер приложений
const appRef = sc.app()
console.log(appRef === app) // true

// Уничтожить приложение
sc.destroyApp().then(() => {
  console.log('Application has been destroyed!')
})
```

### Приложение

Приложение предоставляет апи для работы с сервисами скорокод приложения (`auth`, `fs`, `pg`, `ws`)

```javascript
const sc = require('@scorocode/server-sdk').default
const app = sc.initApp({ ... })
console.log(app === sc.app())   // true

// Синхронный пособ получить сервис (без конфигурации сервиса)
// если сервис не был создан, он будет создан с конфигурацией по умолчанию и возвращен
let pgService = app.pg()

// Асинхронный пособ получить сервис
async function example() {
    // если сервис не был создан, он будет создан с переданной конфигурацией поверх конфигурации по умолчанию и возвращен
    let authService = await app.auth({ ... })
    // если сервис уже был создан, то текущий сервис будет уничтожен и создан новый
    // ВАЖНО: если код приложения был подписан события сервиса, необходимо совершить переподписку в новой версии сервиса
    authService = await app.auth({ ... })
}
example()
```

### Сервисы

- `auth` - сервис авторизации

```javascript
const sc = require('@scorocode/server-sdk').default
const app = sc.initApp({ ... })

const auth = app.auth()

async function example() {
  // получить открытую сессию по токену
  let session = await auth.getSession('sessionToken...')

  // обновить сессию с помощью refreshToken
  session = await auth.refreshSession('sessionToken...')

  // аутентифицировать пользователя и создать сессию
  session = await auth.signInWithEmailAndPassword('user@mail.com', 'password')

  // закрыть сессию по токену
  await auth.signOutByToken(session.token)

  // создать пользователя
  let user = await auth.createUser('user@mail.com', 'password')

  // получить пользователя по ID
  user = await auth.getUserById('userId...')

  // получить пользователя по емейлу
  user = await auth.getUserByEmail('user@mail.com')

  // получить пользователя по токену сессии
  user = await auth.getUserByToken('sessionToken...')

  // удалить пользователя по ID
  await auth.deleteUserById('userId...')
}

example()
```

- `acl` - сервис управления правами доступа

```javascript
const sc = require('@scorocode/server-sdk').default
const app = sc.initApp({ ... })

const acl = app.acl()

async function example() {
  // получить список ролей
  const roles = await acl.getRoles()

  // получить список объектов прав доступа для перечисленных ролей
  // возвращается мэп { [roleName]: { ...aclObject } }
  const acls = await acl.getAclsByRoles(['admin', 'customer'])
}

example()
```

- `fs` - сервис для работы с файлами

```javascript
const sc = require('@scorocode/server-sdk').default
const app = sc.initApp({ ... })

const fs = app.fs()

// Работа с папками
// Создание указателя на папку
const folder = fs.folder('path/to/folder')

// Синхронизировать с приложением и получить информацию о папке
folder.sync().then((folder) => {
  console.log('File list', folder.files)  // список указателей на папки/файлы
})

// Создать папку
folder.create().then((folder) => {
  console.log('Folder created')
})

// Переименовать папку
folder.rename('newPath/to/folder').then((folder) => {
  console.log('Path', folder.path)  // 'newPath/to/folder'
})

// Удалить папку
folder.delete().then((folder) => {
  console.log('Folder deleted')
})

// Работа с файлами
// Создание указателя на фаил
const file = fs.file('path/to/file')

// Синхронизировать с приложением и получить информацию о файле
file.sync().then((file) => {
  console.log('File list', file.content)  // Blob буфер с контентом файла
})

// Загрузить текст
file.upload('text content')
    .then((file) => file.sync())
    .then((file) => {
      console.log(file.content.toString())  // file.content - Buffer instance
    })

// Загрузить файл
const fs = require('fs')

file.upload(fs.createReadStream('/path/to/file'))
    .then((file) => file.sync())
    .then((file) => {
      console.log(file.content.toString())  // file.content - Buffer instance
    })

// Переименовать файл
file.rename('newPath/to/file').then((file) => {
  console.log('Path', file.path)  // 'newPath/to/file'
})

// Удалить файл
file.delete().then((file) => {
  console.log('File deleted')
})
```

- `pg` - сервис баз данных postgres

```javascript
const sc = require('@scorocode/server-sdk').default
const app = sc.initApp({ ... })

// База данных (Database)

// Чтобы база данных была доступна через сервис БД, необходимо ее зарегистрировать
const newDb = app.pg().registerDatabase({
  id: 'newDB',
  name: 'newDB',
  adminUser: 'username',
  password: 'password',
}).then((db) => {
  console.log(db.info)
  console.log(db.schemas)
})

// Получить объект-ссылку на БД
const db = app.pg().database('dbId')

// Синхронизация - загрузка метаданных и схем БД
db.sync().then((db) => {
  console.log(db.info)
  console.log(db.schemas)
})

// Удалить БД из регистра
sc.app().pg().database('testDbId')
  .drop()
  .then((db) => {
     console.log('DB dropped')
  })

// Создать объект-ссылку на схему БД
let schema = app.pg().database('dbId').schema('schemaName')


// Схемы (Schema)

// Получить объект-ссылку на схему БД
schema = app.pg().schema('dbId', 'test')
// либо
schema = app.pg().database('dbId').schema('test')

// Синхронизация - загрузка метаданных схемы и списка ее коллекций
schema.sync().then((schema) => {
  console.log(schema.info)
  // {
  //   dbId: string
  //   dbName: string
  //   name: string
  //   schemaOwner: string
  //   defaultCharacterSetCatalog: string
  //   defaultCharacterSetSchema: string
  //   defaultCharacterSetName: string
  //   sqlPath: string
  //   tables: [ { name: 'tableName1', isPublic: true }, ... ]
  // }
  console.log(schema.tables)
  // [
  //     { name: 'tableName1', isPublic: true },
  //     { name: 'tableName2', isPublic: false },
  //     ...
  // ]
})


// Таблицы (Table)

// Получить объект-ссылку на коллекцию
// Создать объект-ссылку на таблицу
let table = app.pg().table('dbId', 'schemaName', 'tableName')
// или
table = app.pg().database('dbId').schema('schemaName').table('tableName')

// Синхронизация - загрузка метаданных коллекции
table.sync().then((table) => {
  console.log(table.info)
})

// Создать объект-ссылку на запись таблицы
let record = app.pg().database('dbId').schema('schemaName').table('tableName').record({ id: 123 })


// Записи (Records)

// Получить объект-ссылку на запись
const ref = { id: 1234 }  // объект описывающий ключи по которым будет искаться запись
record = app.pg().record('dbId', 'schemaName', 'tableName', ref)
// либо
record = app.pg().database('dbId').schema('schemaName').table('tableName').record(ref)

// Создать объект-ссылку на новую запись
record = app.pg().record('dbId', 'schemaName', 'tableName')

// Синхронизация - загрузка данных записи
record.sync().then((record) => {
  console.log(record.attributes)    // данные записи { fieldName => fieldValue }
})

// Сохранить изменения
record.set('price', 100)
record.save().then((record) => {
  console.log(record.attributes) // { price: 100, ... }
})

// Создать запись
const newRecord = app.pg().record('dbId', 'testSchema', 'usersTable')
newRecord.attributes = { foo: 'bar' }
newRecord.save().then((record) => {
  console.log(record.ref)   // table's primary keys object - { pk1: 123, pk2: 'as3dfa...' }
  console.log(record.keys)  // table's primary keys list - { 'pk1', 'pk2' }
  console.log(record.id)    // record id represented as string - '123/as3dfa'
  console.log(record.attributes) // { pk1: '123...', pk2: 'as3dfa...', foo: 'bar', ... }
})

// Удалить запись
record.delete().then((record) => {
  console.log('Record deleted')
  console.log(record.isDeleted) // true
})

// Работа с данными записи
// Получить объект с данными записи
// Данные не передаются по ссылке, создается копия данных
record = app.pg().record('myDb', 'test', 'users')  // новая запись

record.attributes = { price: 10 } // установим значения
const attributes = record.attributes  // получим значения
console.log(attributes) // { price: 10 }
// любые изменения полученного объекта с данными не приведет к изменению записи
attributes.price = 20
console.log(record.attributes) // { price: 10 }

// Установить значения записи
record.attributes = { name: 'Product', price: 100 }
// или
record.setAttributes({ name: 'Product', price: 100 })

// Установить значение поля записи
record.set('price', 55)

// Получить значение поля записи
console.log(record.get('price'))  // 55

// Можно установить и получить вложенные значения
record.set('a[0].b.c', 'value')
console.log(record.get('a[0].b.c')) // 'value'
// или
record.set(['a', '0', 'b', 'c'], 'newValue')
console.log(record.get(['a', '0', 'b', 'c'])) // 'newValue'

// Merge - рекурсивное объединение данных
record.attributes = {
  a: 'A',
  b: 'B',
  o: {
    foo: 'foo'
  },
}
record.merge({
  b: 'b',
  o: {
    foo: 'FOO',
    bar: 'bar',
  },
  c: 'c'
})
console.log(record.attributes)
/*
{
  a: 'A',
  b: 'b',
  o: {
    foo: 'FOO',
    bar: 'bar',
  },
  c: 'c'
}
*/

// Assign - объединение данных
record.attributes = {
  a: 'A',
  b: 'B',
  o: {
    foo: 'foo'
  },
}
record.assign({
  b: 'b',
  o: {
    bar: 'bar',
  },
  c: 'c'
})
console.log(record.attributes)
/*
{
  a: 'A',
  b: 'b',
  o: {
    bar: 'bar',
  },
  c: 'c'
}
*/

// set* методы документа позволяют выстраивать цепочку обращений к документу
record
  .setAttributes({ a: '', b: '' })
  .set('a', 'A')
  .set('b', 'B')
  .assign({ c: 'C' })
  .merge({ a: 'AA', b: 'BB' })
  .save()


// Запросы к БД (Query)

// Создать объект-запрос к бд
const query = app.pg().query('dbId', 'schemaName', 'tableName')

// Работа с запросом
// Получить записи удовлетворяющие запросу
query
  .page(2)                        // получить записи начиная со второй страницы
  .limit(15)                      // лимит в 15 записей
  .orderBy('name', 'ascend')      // сортировать по имени по возрастанию
  .orderBy('price', 'descend')    // сортировать по цене по убыванию
  .filterBy({                     // фильтровать опубликованные записи
    isPublished: true,
  })
  .sync()                         // получить записи
  .then((list) => {
   console.log('List', list)
   /*
   {
      from: 15,         // пропущено записей
      limit: 15,        // лимит записей
      total: 25,        // всего записей
      page: 2,          // пропущено записей
      pageSize: 15,     // лимит записей
      totalPages: 2,    // всего записей
      items: [ ... ]    // массив записей (Record)
   }
    */
  })

// Получить количество записей удовлетворяющих запросу
query
  .count()
  .then((count) => {
     console.log('Records matched', count)
  })
```

- `ws` - веб сокет сервис

```javascript
const sc = require('@scorocode/server-sdk').default
const app = sc.initApp({ ... })

async function example() {
    const message = {
        postId: '123...',
        content: 'changed content...'
    }
    // отправить сообщение 'postChanged'
    await app.ws().sendMessage('postChanged', message)

    // отправить сообщение 'postChanged' пользователю с ID 'userId...'
    await app.ws().sendMessage('postChanged', message, 'userId...')
}

example()

// На стороне клиента
sc.app().ws().onMessage('postChanged', (event) => {
    console.log(event)
    // {
    //     type: 'postChanged',
    //     payload: {
    //         postId: '123...',
    //         content: 'changed content...'
    //     }
    // }
})
```

- `push` - сервис PUSH уведомлений

```javascript
const sc = require('@scorocode/server-sdk').default
const app = sc.initApp({ ... })

async function example() {
    // отправить сообщение на android устройства
    await app.push().sendFCM({
        // описание объекта:
        // https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#Message
        token: '123...',
        android: { ... }
    })

    // отправить сообщение на ios устройства
    await app.push().sendAPN({
        // описание объекта:
        // https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#apnsconfig
        token: '123...',
        payload: { ... }
    })
}
```
