package com.musicFM.service;

import com.musicFM.pojo.Singer;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface SingerService {
    /**
     * 查询所有歌手
     */
    List<Singer> selectAllSinger();

    /**
     * 名字模糊查询歌手
     */
    List<Singer> getSingerByName(String singerName);

    /**
     * @param userId
     */
    List<Singer> getLoveSingerByUserId(Long userId);

    /**
     * 根据ID查询歌手
     */
    Singer getSingerById(Long singerID);

    /**
     * 获取歌手的数量
     */
    Long getSingerCount();

    /**
     * 根据Tag查询相识歌手
     */
    List<Singer> getSameSingerByTagIdAndSingerId(Long tagId, Long singerId);

    /**
     * 收藏歌手
     */
    Integer insertSingerToUserBySingerIdAndUserId(Long singerId, Long userId);

    /**
     * 查找喜欢该歌手的用户数量
     */
    Integer getCollectSingerUserBySingerId(Long singerId);
}
