# barrage-bang
弹幕~

一个使用Electron实现的简单桌面弹幕系统，可以在桌面显示弹幕

### 后端服务

启动Springboot

```shell
java -jar barrage-server.jar
```

### 桌面客户端

```shell
#安装
yarn install

#启动

yarn run start
```



### 客户端链接成功
![image-20220329093338597](https://user-images.githubusercontent.com/56824280/160515044-6916cb91-9e5d-44f5-902e-bbb25b04e879.png)



### 请求接口

```http
post http://localhost:8080/barrage/sendMsg?msg=弹幕弹幕，我发送了一个弹幕
```

### 接收到消息
![image-20220329093454585](https://user-images.githubusercontent.com/56824280/160515064-ed8003d5-e9e4-47b5-a758-afaf747c2427.png)

