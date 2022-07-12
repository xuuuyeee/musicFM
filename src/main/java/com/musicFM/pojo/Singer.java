package com.musicFM.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Singer {
    private Long singerId;
    private String singerName;
    private String sex;
    private Integer age;
    private List<Song> songList;
    private List<User> userList;
    private Integer fansCount;
    private String singerPictureHref;
}
