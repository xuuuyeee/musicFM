package com.musicFM.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Song {
    private Long songId;
    private String songName;
    private String pictureHref;
    private String locateHref;
    private String lrcHref;
    private Singer singer;
    private List<Tag> tagList;
    private List<Favorite> favoriteList;
}
