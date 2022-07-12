package com.musicFM.service;

import com.musicFM.pojo.Tag;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TagService {
    /**
     * 查询所有tag
     */
    List<Tag> selectAllTag();

    /**
     * 名字模糊查询tag
     */
    List<Tag> getTagByName(String tagName);

    /**
     * 根据ID查找tag
     */
    Tag getTagAndSongById(Long tagId);
}
