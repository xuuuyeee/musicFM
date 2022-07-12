package com.musicFM.mapper;

import com.musicFM.pojo.Favorite;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface FavoriteMapper {
    /**
     * 查询所有歌单
     *
     * @return
     */
    List<Favorite> selectAllFavorite();

    /**
     * 名字模糊查询歌单
     *
     * @param favoriteName
     * @return
     */
    List<Favorite> getFavoriteByName(@Param("favoriteName") String favoriteName);

//    /**
//     * 收藏歌曲
//     *
//     * @param favoriteId
//     * @param songID
//     */
//    Integer insertFavoriteAndSong(@Param("favoriteID") Long favoriteId, @Param("songID") Long songID);

    /**
     * 获取歌单的数量
     *
     * @return
     */
    Long getFavoriteCount();

    /**
     * 根据Id查询收藏歌单
     *
     * @param favoriteId
     * @return
     */
    Favorite getFavoriteById(@Param("favoriteId") Long favoriteId);

    /**
     * 根据用户id查询喜欢歌单
     *
     * @param userId
     * @return
     */
    Favorite getLoveFavoriteByUserId(@Param("userId") Long userId);

    /**
     * 获取用户喜欢歌单的id
     *
     * @param userId
     * @return
     */
    Long getLoveFavoriteIdByUserId(@Param("userId") Long userId);

    /**
     * 根据用户id查询喜欢的收藏歌单
     *
     * @param userId
     * @return
     */
    List<Favorite> getUserHaveFavoriteByUserId(@Param("userId") Long userId);

    /**
     * 根据用户id查询创建的收藏歌单
     *
     * @param userId
     * @return
     */
    List<Favorite> getUserCreateFavoriteByUserId(@Param("userId") Long userId);

    /**
     * 创建喜欢歌单
     *
     * @param userId
     * @param favoriteName
     * @return
     */
    Integer insertLoveFavoriteByUserId(@Param("userId") Long userId, @Param("favoriteName") String favoriteName);

    /**
     * 创建歌单
     *
     * @param userId
     * @param favoriteName
     * @return
     */
    Integer insertFavoriteByUserId(@Param("userId") Long userId, @Param("favoriteName") String favoriteName);

    /**
     * 收藏歌曲进入歌单
     *
     * @param favoriteID
     * @param songID
     * @return
     */
    Integer insertSongToFavoriteByFavoriteIdAndSongId(@Param("favoriteId") Long favoriteID, @Param("songId") Long songID);

    /**
     * 收藏歌单
     *
     * @param favoriteId
     * @param userId
     * @return
     */
    Integer insertFavoriteToUserByFavoriteIdAndUserId(@Param("favoriteId") Long favoriteId, @Param("userId") Long userId);

    /**
     * 取消歌曲收藏
     *
     * @param songId
     * @param favoriteId
     * @return
     */
    Integer deleteSongFromFavoriteBySongIdAndFavoriteId(@Param("songId") Long songId, @Param("favoriteID") Long favoriteId);

    /**
     * 删除歌单收藏的所有歌曲
     *
     * @param favoriteId
     * @return
     */
    Integer deleteAllSongFromFavoriteByFavoriteId(@Param("favoriteId") Long favoriteId);


    /**
     * 删除歌单
     *
     * @param favoriteId
     * @return
     */
    Integer deleteFavoriteByFavoriteId(@Param("favoriteId") Long favoriteId);

    /**
     * 获取有多少用户收藏该歌单
     *
     * @param favoriteId
     * @return
     */
    Integer getCollectFavoriteUserByFavoriteId(@Param("favoriteId") Long favoriteId);

    /**
     * 获取刚才增加的歌单的数据
     *
     * @return
     */
    Long getLastFavorite();

    /**
     * 给歌单增加封面
     *
     * @param favoriteId
     * @param pictureHref
     * @return
     */
    Integer addPictureToFavoriteByFavoriteIdAndPictureHref(@Param("favoriteId") Long favoriteId, @Param("pictureHref") String pictureHref);

    /**
     * 从所有用户中删除该歌单
     *
     * @param favoriteId
     * @return
     */
    Integer deleteFavoriteFromAllUserByFavoriteId(@Param("favoriteId") Long favoriteId);
}
