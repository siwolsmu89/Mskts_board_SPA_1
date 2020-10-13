package com.study.wknd.board;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class TestController {
    
    @ResponseBody
    @RequestMapping("/home")
    public String board() {

        System.out.println("TestController activated");
        return "home.html";
    }
}
