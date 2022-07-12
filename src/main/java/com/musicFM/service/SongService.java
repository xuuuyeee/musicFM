package com.musicFM.service;

import com.musicFM.pojo.Song;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface SongService {
    /**
     * 查询所有歌曲
     */
    List<Song> selectAllSong();

    /**
     * 名字模糊查询歌曲
     */
    List<Song> getSongByName(String songName);

    /**
     * 根据songId查询歌曲
     */
    Song getSongById(Long songId);

}
