package com.musicFM.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tag {
    private Long tagID;
    private String tagName;
    private List<Song> songList;
}
