package com.musicFM.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Long userId;
    private String userName;
    private String pwd;
    private String nickName;
    private String description;
    private Integer isDelete;
    private List<Favorite> favoriteList;
    private List<Singer> singerList;
}
