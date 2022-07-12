package com.musicFM.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Favorite {
    private Long favoriteId;
    private String favoriteName;
    private Long authorId;
    private Integer isDelete;
    private Long loveID;
    private List<User> userList;
    private List<Song> songList;
    private Integer collectCount;
    private String favoritePictureHref;
}
