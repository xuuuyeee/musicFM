package com.musicFM.service.Impl;

import com.musicFM.mapper.SongMapper;
import com.musicFM.pojo.Song;
import com.musicFM.service.SongService;
import com.musicFM.util.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class SongServiceImpl implements SongService {

    SqlSessionFactory factory = SqlSessionFactoryUtils.getSqlSessionFactory();

    @Override
    public List<Song> selectAllSong() {
        SqlSession sqlSession = factory.openSession();
        SongMapper mapper = sqlSession.getMapper(SongMapper.class);
        List<Song> songs = mapper.selectAllSong();
        sqlSession.close();
        return songs;
    }

    @Override
    public List<Song> getSongByName(String songName) {
        SqlSession sqlSession = factory.openSession();
        SongMapper mapper = sqlSession.getMapper(SongMapper.class);
        List<Song> songs = mapper.getSongByName(songName);
        sqlSession.close();
        return songs;
    }

    @Override
    public Song getSongById(Long songId) {
        SqlSession sqlSession = factory.openSession();
        SongMapper mapper = sqlSession.getMapper(SongMapper.class);
        Song song = mapper.getSongById(songId);
        sqlSession.close();
        return song;
    }

}
