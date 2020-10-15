package com.study.wknd.board.test;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    
    @RequestMapping("/home")
    public String board() {

        System.out.println("TestController activated");
        return "home.html";
    }
}
