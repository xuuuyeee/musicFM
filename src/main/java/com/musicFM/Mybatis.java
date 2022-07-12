package com.musicFM;

import com.alibaba.fastjson.JSON;
import com.musicFM.pojo.*;
import com.musicFM.service.*;
import com.musicFM.service.Impl.*;

import java.io.IOException;
import java.util.*;

public class Mybatis {
    public static void main(String[] args) throws IOException {
        /**
         * 查询所有歌手
         */

UserService userService = new UserServiceImpl();

//        FavoriteService favoriteService = new FavoriteServiceImpl();
//        Long userId = 1L;
//        favoriteService.getFavoriteById(1L);
//
//        userService.deleteAllSingerFromUserByUserId(userId);
//        List<Favorite> favoriteList = favoriteService.getUserCreateFavoriteByUserId(userId);
//        for (int i = 0; i < favoriteList.size(); ++i) {
//            Favorite favorite = favoriteList.get(i);
//            favoriteService.deleteAllSongFromFavoriteByFavoriteId(favorite.getFavoriteId());
//            favoriteService.deleteFavoriteByFavoriteId(favorite.getFavoriteId());
//        }
//        Favorite favorite = favoriteService.getLoveFavoriteByUserId(userId);
//        favoriteService.deleteAllSongFromFavoriteByFavoriteId(favorite.getFavoriteId());
//        favoriteService.deleteFavoriteByFavoriteId(favorite.getFavoriteId());
//        userService.deleteAllFavoriteFromUserByUserId(userId);
//        Integer integer = userService.deleteUserByUserID(userId);

//        SingerService singerService = new SingerServiceImpl();
//        List<Singer> singerList = singerService.selectAllSinger();
//        int size = singerList.size();
//        Set<Integer> integerSet = new HashSet<>();
//        while (integerSet.size() < 9) {
//            // 调用Math.random()方法
//            int num = (int) (Math.random() * size);
//            integerSet.add(num);// 将不同的数存入HashSet中
//        }
//        List<Singer> singers = new ArrayList<>();
//
//        Iterator<Integer> iterator = integerSet.iterator();
//        while (iterator.hasNext()) {
//            singers.add(singerList.get(iterator.next()));
//        }
//        System.out.println(singers);

//        TagService tagService = new TagServiceImpl();
//        System.out.println(tagService.getTagAndSongById(1L));
        FavoriteService favoriteService = new FavoriteServiceImpl();
//        System.out.println(favoriteService.selectAllFavorite());
        userService.loginUserByUserNameAndPwd("axuuuyeee","123456");
    }
}
