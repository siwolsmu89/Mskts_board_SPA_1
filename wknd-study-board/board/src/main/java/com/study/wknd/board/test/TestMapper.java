package com.study.wknd.board.test;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface TestMapper {
    public void insertTest(Map<String, String> paramMap);

    public List<Map<String, Object>> selectTest();
}
