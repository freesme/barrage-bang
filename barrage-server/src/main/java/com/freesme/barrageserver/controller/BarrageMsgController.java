package com.freesme.barrageserver.controller;

import com.freesme.barrageserver.websocket.WebSocketUsers;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.Session;
import java.util.Collection;
import java.util.Map;

@RestController
@RequestMapping("/barrage")
public class BarrageMsgController {
    @PostMapping("/sendMsg")
    public void send2User(String msg){
        Map<String, Session> users = WebSocketUsers.getUsers();
        Collection<Session> values = users.values();

        for (Session session : values) {
            //给所有的用户发信息  TODO 使用广播的方式处理
            WebSocketUsers.sendMessageToUserByText(session, msg);
        }

    }
}
