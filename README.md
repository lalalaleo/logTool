# logTool

## 简介

​     这是一个前端日志工具，用于日志输出，筛选，管理。

![img](http://www.lalalaleo.bitcron.com/blog/_image/2017/09/Image.png)

## 开发目的

- 输出格式化：每条日志都携带 日志等级、时间(可选)、模块信息、输出信息。
- 日志输出样式更易读
- 保留所有日志：不需要因为日志过于杂乱经常清理
- 方便管理
- 根据不同情景选择输出不同日志：开发、上线等
- 模块筛选器：屏蔽某些模块的日志输出

## 功能

### 日志等级

等级分为：debug, info, warn, error.(level: 0~3)

在配置文件中，可以设置项目等级，日志等级小于项目等级时不会输出。

比如：当项目level等级为2时，仅输出，level等级大于2的日志，如：warn和error。

#### debug

![img](http://www.lalalaleo.bitcron.com/blog/_image/2017/09/Image(1).png)

- level：0，
- 颜色：yellowgreen，
- 作用：用于开发调试内容输出，
- 情景：比如获取数据时，将数据相关信息输出。输出内容都为项目中获取或传递的数据。
- 期望：善用debug日志，希望在调试情景下，可以看到整个页面的所有数据获取、传递信息。
- API：log.debug()，

#### info

![img](http://www.lalalaleo.bitcron.com/blog/_image/2017/09/Image(2).png)

- level：1，
- 颜色：skyblue，
- 作用：特殊信息输出，
- 情景：输出的内容不为项目中的获取或传递的数据。类似特殊标记，比如某个事件后输出一段特定的字符串等。
- 期望：如果平时常用alert或console.log来做特殊点标记，希望能用log.info()替换。
- API：log.info()，

#### warn

![img](http://www.lalalaleo.bitcron.com/blog/_image/2017/09/Image(3).png)

- level：2，
- 颜色：gold，
- 作用：警告信息输出，
- 情景：获取的数据异常时；正常理解就行，用于异常、警告的日志输出，
- 期望：无，
- API：log.warn()，

#### error

![img](http://www.lalalaleo.bitcron.com/blog/_image/2017/09/Image(4).png)

- level：3，
- 颜色：red，
- 作用：报错信息输出，
- 情景：数据获取失败时；正常理解就行，用于报错的日志输出，
- 期望：无，
- API：log.error()，

### 输出时间

![img](http://www.lalalaleo.bitcron.com/blog/_image/2017/09/Image(5).png)

开启该功能时，会在每条日志输出时自动携带时间，默认关闭，在配置文件中可以选择开启或关闭这一项。

### 输出模块信息

输出日志时，会自动携带日志所在模块的信息，该项默认开启，暂时无法关闭。

### 模块筛选器

除了调整项目等级来选择日志输出，还可以使用filters来屏蔽一些模块的日志。

![img](http://www.lalalaleo.bitcron.com/blog/_image/2017/09/Image(6).png)

写法与模块相同，还可以用通配符来筛选多个模块，如：

![img](http://www.lalalaleo.bitcron.com/blog/_image/2017/09/Image(7).png)

这样就可以屏蔽所有的页面、工具类、公共组件。

## 使用方式

- 下载工具，并放置到公共工具类目录或静态资源目录（仅建议）
- import log工具
- 创建模块内log对象，配置模块信息
- 修改配置文件，根据适合自己的情景进行配置。
- 使用log对象的四个API

![img](http://www.lalalaleo.bitcron.com/blog/_image/2017/09/Image(8).png)

![img](http://www.lalalaleo.bitcron.com/blog/_image/2017/09/Image(9).png)

### 配置文件 （confLog.js)

![img](http://www.lalalaleo.bitcron.com/blog/_image/2017/09/Image(10).png)

## 使用建议

- 一般开发时，项目等级设为 1或以上
- 调试时，将项目等级设为 0
- 上线时，将项目等级设为 2以上，一般设为 3（仅输出error日志）
- 必要的情况下，可以在上线时，将error日志发至后台，用于数据收集及维护 