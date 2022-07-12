package com.musicFM.service.Impl;

import com.musicFM.mapper.FavoriteMapper;
import com.musicFM.pojo.Favorite;
import com.musicFM.service.FavoriteService;
import com.musicFM.util.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class FavoriteServiceImpl implements FavoriteService {

    SqlSessionFactory factory = SqlSessionFactoryUtils.getSqlSessionFactory();

    @Override
    public List<Favorite> selectAllFavorite() {
        SqlSession sqlSession = factory.openSession();
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        List<Favorite> favorites = mapper.selectAllFavorite();
        sqlSession.close();
        return favorites;
    }

    @Override
    public List<Favorite> getFavoriteByName(String favoriteName) {
        SqlSession sqlSession = factory.openSession();
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        List<Favorite> favorites = mapper.getFavoriteByName(favoriteName);
        sqlSession.close();
        return favorites;
    }

    @Override
    public Long getFavoriteCount() {
        SqlSession sqlSession = factory.openSession();
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        Long aLong = mapper.getFavoriteCount();
        sqlSession.close();
        return aLong;
    }

//    @Override
//    public Integer insertFavoriteAndSong(Long favoriteId, Long songID) {
//        SqlSession sqlSession = factory.openSession(true);
//        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
//        Integer integer = mapper.insertFavoriteAndSong(favoriteId, songID);
//        sqlSession.close();
//        return integer;
//    }

    @Override
    public Favorite getFavoriteById(Long favoriteId) {
        SqlSession sqlSession = factory.openSession(true);
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        Favorite favorite = mapper.getFavoriteById(favoriteId);
        sqlSession.close();
        return favorite;
    }

    @Override
    public Favorite getLoveFavoriteByUserId(Long userId) {
        SqlSession sqlSession = factory.openSession(true);
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        Favorite favorite = mapper.getLoveFavoriteByUserId(userId);
        sqlSession.close();
        return favorite;
    }

    @Override
    public List<Favorite> getUserHaveFavoriteByUserId(Long userId) {
        SqlSession sqlSession = factory.openSession();
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        List<Favorite> favorites = mapper.getUserHaveFavoriteByUserId(userId);
        sqlSession.close();
        return favorites;
    }

    @Override
    public List<Favorite> getUserCreateFavoriteByUserId(Long userId) {
        SqlSession sqlSession = factory.openSession();
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        List<Favorite> favorites = mapper.getUserCreateFavoriteByUserId(userId);
        sqlSession.close();
        return favorites;
    }

    @Override
    public Integer insertLoveFavoriteByUserId(Long userId, String favoriteName) {
        SqlSession sqlSession = factory.openSession(true);
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        Integer integer = mapper.insertLoveFavoriteByUserId(userId, favoriteName);
        sqlSession.close();
        return integer;
    }

    @Override
    public Integer insertFavoriteByUserId(Long userId, String favoriteName) {
        SqlSession sqlSession = factory.openSession(true);
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        Integer integer = mapper.insertFavoriteByUserId(userId, favoriteName);
        sqlSession.close();
        return integer;
    }

    @Override
    public Integer insertSongToFavoriteByFavoriteIdAndSongId(Long favoriteID, Long songID) {
        SqlSession sqlSession = factory.openSession(true);
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        Integer integer = mapper.insertSongToFavoriteByFavoriteIdAndSongId(favoriteID, songID);
        sqlSession.close();
        return integer;
    }

    @Override
    public Integer deleteSongFromFavoriteBySongIdAndFavoriteId(Long songId, Long favoriteId) {
        SqlSession sqlSession = factory.openSession(true);
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        Integer integer = mapper.deleteSongFromFavoriteBySongIdAndFavoriteId(songId, favoriteId);
        sqlSession.close();
        return integer;
    }

    @Override
    public Integer deleteAllSongFromFavoriteByFavoriteId(Long favoriteId) {
        SqlSession sqlSession = factory.openSession(true);
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        Integer integer = mapper.deleteAllSongFromFavoriteByFavoriteId(favoriteId);
        sqlSession.close();
        return integer;
    }

    @Override
    public Integer deleteFavoriteByFavoriteId(Long favoriteId) {
        SqlSession sqlSession = factory.openSession(true);
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        Integer integer = mapper.deleteFavoriteByFavoriteId(favoriteId);
        sqlSession.close();
        return integer;
    }

    @Override
    public Integer getCollectFavoriteUserByFavoriteId(Long favoriteId) {
        SqlSession sqlSession = factory.openSession(true);
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        Integer integer = mapper.getCollectFavoriteUserByFavoriteId(favoriteId);
        sqlSession.close();
        return integer;
    }

    @Override
    public Long getLoveFavoriteIdByUserId(Long userId) {
        SqlSession sqlSession = factory.openSession(true);
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        Long aLong = mapper.getLoveFavoriteIdByUserId(userId);
        sqlSession.close();
        return aLong;
    }

    @Override
    public Integer insertFavoriteToUserByFavoriteIdAndUserId(Long favoriteId, Long userId) {
        SqlSession sqlSession = factory.openSession(true);
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        Integer integer = mapper.insertFavoriteToUserByFavoriteIdAndUserId(favoriteId, userId);
        sqlSession.close();
        return integer;
    }

    @Override
    public Long getLastFavorite() {
        SqlSession sqlSession = factory.openSession();
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        Long aLong = mapper.getLastFavorite();
        sqlSession.close();
        return aLong;
    }

    @Override
    public Integer addPictureToFavoriteByFavoriteIdAndPictureHref(Long favoriteId, String pictureHref) {
        SqlSession sqlSession = factory.openSession(true);
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        Integer integer = mapper.addPictureToFavoriteByFavoriteIdAndPictureHref(favoriteId, pictureHref);
        sqlSession.close();
        return integer;
    }

    @Override
    public Integer deleteFavoriteFromAllUserByFavoriteId(Long favoriteId) {
        SqlSession sqlSession = factory.openSession(true);
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        Integer integer = mapper.deleteFavoriteFromAllUserByFavoriteId(favoriteId);
        sqlSession.close();
        return integer;
    }
}
