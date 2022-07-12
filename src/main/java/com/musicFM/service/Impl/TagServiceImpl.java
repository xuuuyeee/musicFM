package com.musicFM.service.Impl;

import com.musicFM.mapper.TagMapper;
import com.musicFM.pojo.Tag;
import com.musicFM.service.TagService;
import com.musicFM.util.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class TagServiceImpl implements TagService {
    SqlSessionFactory factory = SqlSessionFactoryUtils.getSqlSessionFactory();

    @Override
    public List<Tag> selectAllTag() {
        SqlSession sqlSession = factory.openSession();
        TagMapper mapper = sqlSession.getMapper(TagMapper.class);
        List<Tag> tags = mapper.selectAllTag();
        sqlSession.close();
        return tags;
    }

    public List<Tag> getTagByName(String tagName) {
        SqlSession sqlSession = factory.openSession();
        TagMapper mapper = sqlSession.getMapper(TagMapper.class);
        List<Tag> tags = mapper.getTagByName(tagName);
        sqlSession.close();
        return tags;
    }

    @Override
    public Tag getTagAndSongById(Long tagId) {
        SqlSession sqlSession = factory.openSession();
        TagMapper mapper = sqlSession.getMapper(TagMapper.class);
        Tag tag = mapper.getTagAndSongById(tagId);
        sqlSession.close();
        return tag;
    }
}
