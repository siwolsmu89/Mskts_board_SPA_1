package com.study.wknd.board.test;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    
    @Autowired
    TestService testService;

    @RequestMapping("/date")
    public String board() {
        testService.insertDate();

        System.out.println("TestController activated");
        return "Nice To See You.";
    }

    @RequestMapping("/insert")
    public String insert(@RequestBody Map<String, String> param) {
        testService.insertText(param);

        System.out.println("TestController activated 2");
        String map = param.toString();
        return "insert Complete: " + map;
    }
}
