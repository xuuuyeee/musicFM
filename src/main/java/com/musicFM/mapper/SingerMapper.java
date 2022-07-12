package com.musicFM.mapper;

import com.musicFM.pojo.Singer;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface SingerMapper {

    /**
     * 查询所有歌手
     */
    List<Singer> selectAllSinger();

    /**
     * 名字模糊查询歌手
     *
     * @param singerName
     */
    List<Singer> getSingerByName(@Param("singerName") String singerName);

    /**
     * 根据ID查询歌手
     *
     * @param singerID
     */
    Singer getSingerById(@Param("singerID") Long singerID);

    /**
     * 获取歌手的数量
     */
    Long getSingerCount();

    /**
     * 根据Tag查询相识歌手
     *
     * @param tagId
     * @param singerId
     * @return
     */
    List<Singer> getSameSingerByTagIdAndSingerId(@Param("tagId") Long tagId, @Param("singerId") Long singerId);

    /**
     * 收藏歌手
     *
     * @param singerId
     * @param userId
     * @return
     */
    Integer insertSingerToUserBySingerIdAndUserId(@Param("singerId") Long singerId, @Param("userId") Long userId);

    /**
     * 查找喜欢该歌手的用户数量
     *
     * @param singerId
     * @return
     */
    Integer getCollectSingerUserBySingerId(@Param("singerId") Long singerId);

    /**
     * 获取用户喜欢的歌手
     *
     * @param userId
     * @return
     */
    List<Singer> getLoveSingerByUserId(@Param("userId") Long userId);
}

