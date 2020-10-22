package com.study.wknd.board.test;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    
    @Autowired
    public TestMapper mapper;

    @RequestMapping("/home")
    public String board() {

        Map<String, String> paramMap = new HashMap<String, String>();
        paramMap.put("name", "test");

        mapper.insertTest(paramMap);

        System.out.println("TestController activated");
        return "home.html";
    }
}
