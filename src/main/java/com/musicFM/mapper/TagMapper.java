package com.musicFM.mapper;

import com.musicFM.pojo.Tag;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TagMapper {
    /**
     * 查询所有tag
     *
     * @return
     */
    List<Tag> selectAllTag();

    /**
     * 名字模糊查询tag
     *
     * @param tagName
     * @return
     */
    List<Tag> getTagByName(@Param("tagName") String tagName);

    /**
     * 根据ID查找tag
     *
     * @param tagId
     * @return
     */
    Tag getTagAndSongById(@Param("tagId") Long tagId);
}
