package com.musicFM.service.Impl;

import com.musicFM.mapper.SingerMapper;
import com.musicFM.pojo.Singer;
import com.musicFM.service.SingerService;
import com.musicFM.util.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class SingerServiceImpl implements SingerService {

    SqlSessionFactory factory = SqlSessionFactoryUtils.getSqlSessionFactory();

    @Override
    public List<Singer> selectAllSinger() {
        SqlSession sqlSession = factory.openSession();
        SingerMapper mapper = sqlSession.getMapper(SingerMapper.class);
        List<Singer> singers = mapper.selectAllSinger();
        sqlSession.close();
        return singers;
    }

    @Override
    public List<Singer> getSingerByName(String singerName) {
        SqlSession sqlSession = factory.openSession();
        SingerMapper mapper = sqlSession.getMapper(SingerMapper.class);
        List<Singer> singers = mapper.getSingerByName(singerName);
        sqlSession.close();
        return singers;
    }

    @Override
    public Singer getSingerById(Long singerID) {
        SqlSession sqlSession = factory.openSession();
        SingerMapper mapper = sqlSession.getMapper(SingerMapper.class);
        Singer singer = mapper.getSingerById(singerID);
        sqlSession.close();
        return singer;
    }

    @Override
    public Long getSingerCount() {
        SqlSession sqlSession = factory.openSession();
        SingerMapper mapper = sqlSession.getMapper(SingerMapper.class);
        Long aLong = mapper.getSingerCount();
        sqlSession.close();
        return aLong;
    }

    @Override
    public List<Singer> getSameSingerByTagIdAndSingerId(Long tagId, Long singerId) {
        SqlSession sqlSession = factory.openSession();
        SingerMapper mapper = sqlSession.getMapper(SingerMapper.class);
        List<Singer> singers = mapper.getSameSingerByTagIdAndSingerId(tagId, singerId);
        sqlSession.close();
        return singers;
    }

    @Override
    public Integer insertSingerToUserBySingerIdAndUserId(Long singerId, Long userId) {
        SqlSession sqlSession = factory.openSession(true);
        SingerMapper mapper = sqlSession.getMapper(SingerMapper.class);
        Integer integer = mapper.insertSingerToUserBySingerIdAndUserId(singerId, userId);
        sqlSession.close();
        return integer;
    }

    @Override
    public Integer getCollectSingerUserBySingerId(Long singerId) {
        SqlSession sqlSession = factory.openSession(true);
        SingerMapper mapper = sqlSession.getMapper(SingerMapper.class);
        Integer integer = mapper.getCollectSingerUserBySingerId(singerId);
        sqlSession.close();
        return integer;
    }

    @Override
    public List<Singer> getLoveSingerByUserId(Long userId) {
        SqlSession sqlSession = factory.openSession();
        SingerMapper mapper = sqlSession.getMapper(SingerMapper.class);
        List<Singer> singerList = mapper.getLoveSingerByUserId(userId);
        sqlSession.close();
        return singerList;
    }
}
