package com.study.wknd.board.test;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestService {
    @Autowired
    public TestMapper mapper;

    public void insertDate() {
        Map<String, String> paramMap = new HashMap<String, String>();
        Date date = new Date();
        String dateString = date.toString();
        paramMap.put("name", dateString);
        
        mapper.insertTest(paramMap);
    }

    public void insertText(Map<String, String> param) {
        mapper.insertTest(param);
    }
}
