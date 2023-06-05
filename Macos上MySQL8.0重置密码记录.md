## 1.确保 mysql server 已经停止运行

查询mysql server 是否处于运行状态

`sudo /usr/local/mysql/support-files/mysql.server status `

如果正在运行，则将其停止

`sudo /usr/local/mysql/support-files/mysql.server stop `

以 skip-grant-tables 模式启动mysql

`sudo /usr/local/mysql/support-files/mysql.server start --skip-grant-tables `

## 2. 修改密码

登录 mysql

`mysql -u root `

设置密码为空

`mysql> UPDATE mysql.user SET authentication_string=null WHERE User='root'; mysql> flush privileges; mysql> exit; `

再次登录 mysql

`mysql -u root `

更改密码

`mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'yourpasswd'; mysql> flush privileges; mysql> exit; `

## 3. 以正常模式启动 mysql

`sudo /usr/local/mysql/support-files/mysql.server stop sudo /usr/local/mysql/support-files/mysql.server start `

## 至此，就可以正常登录 mysql

`mysql -u root -p `



`/Library/LaunchDaemons/com.oracle.oss.mysql.mysqld.plist`

`sudo /usr/local/mysql/support-files/mysql.server restart`