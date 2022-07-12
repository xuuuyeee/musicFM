package com.musicFM.service;

import com.musicFM.pojo.Favorite;

import java.util.List;

public interface FavoriteService {
    /**
     * 查询所有歌单
     */
    List<Favorite> selectAllFavorite();

    /**
     * 名字模糊查询歌单
     */
    List<Favorite> getFavoriteByName(String favoriteName);

//    /**
//     * 收藏歌曲
//     */
//    Integer insertFavoriteAndSong(Long favoriteId, Long songID);

    /**
     * 获取歌单的数量
     */
    Long getFavoriteCount();


    /**
     * 根据Id查询收藏歌单
     */
    Favorite getFavoriteById(Long favoriteId);

    /**
     * 根据用户id查询喜欢歌单
     */
    Favorite getLoveFavoriteByUserId(Long userId);

    /**
     * 获取用户喜欢歌单的id
     */
    Long getLoveFavoriteIdByUserId(Long userId);

    /**
     * 根据用户id查询喜欢的收藏歌单
     */
    List<Favorite> getUserHaveFavoriteByUserId(Long userId);

    /**
     * 根据用户id查询创建的收藏歌单
     */
    List<Favorite> getUserCreateFavoriteByUserId(Long userId);

    /**
     * 创建喜欢歌单
     */
    Integer insertLoveFavoriteByUserId(Long userId, String favoriteName);

    /**
     * 创建歌单
     */
    Integer insertFavoriteByUserId(Long userId, String favoriteName);

    /**
     * 收藏歌曲进入歌单
     */
    Integer insertSongToFavoriteByFavoriteIdAndSongId(Long favoriteID, Long songID);

    /**
     * 收藏歌单
     *
     * @return
     */
    Integer insertFavoriteToUserByFavoriteIdAndUserId(Long favoriteId, Long userId);

    /**
     * 取消歌单收藏
     */
    Integer deleteSongFromFavoriteBySongIdAndFavoriteId(Long songId, Long favoriteId);

    /**
     * 删除歌单收藏的所有歌曲
     */
    Integer deleteAllSongFromFavoriteByFavoriteId(Long favoriteId);

    /**
     * 删除歌单
     */
    Integer deleteFavoriteByFavoriteId(Long favoriteId);

    /**
     * 获取有多少用户收藏该歌单
     */
    Integer getCollectFavoriteUserByFavoriteId(Long favoriteId);

    /**
     * 获取刚才增加的歌单的数据
     *
     * @return
     */
    Long getLastFavorite();

    /**
     * 给歌单增加封面
     */
    Integer addPictureToFavoriteByFavoriteIdAndPictureHref(Long favoriteId, String pictureHref);

    /**
     * 从所有用户中删除该歌单
     */
    Integer deleteFavoriteFromAllUserByFavoriteId(Long favoriteId);
}

