package com.musicFM.mapper;

import com.musicFM.pojo.Song;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface SongMapper {

    /**
     * 查询所有歌曲
     *
     * @return
     */
    List<Song> selectAllSong();

    /**
     * 名字模糊查询歌曲
     *
     * @param songName
     * @return
     */
    List<Song> getSongByName(@Param("songName") String songName);

    /**
     * 根据songId查询歌曲
     *
     * @param songId
     * @return
     */
    Song getSongById(@Param("songId") Long songId);


}
