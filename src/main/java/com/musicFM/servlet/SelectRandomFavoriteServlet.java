package com.musicFM.servlet;

import com.alibaba.fastjson.JSON;
import com.musicFM.pojo.Favorite;
import com.musicFM.pojo.Singer;
import com.musicFM.service.FavoriteService;
import com.musicFM.service.Impl.FavoriteServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

@WebServlet("/selectRandomFavoriteServlet")
public class SelectRandomFavoriteServlet extends HttpServlet {

    private FavoriteService favoriteService = new FavoriteServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Favorite> favoriteList = favoriteService.selectAllFavorite();
        Integer size = favoriteList.size();
        Set<Integer> integerSet = new HashSet<>();
        while (integerSet.size() < 10) {
            // 调用Math.random()方法
            int num = (int) (Math.random() * size);
            if( favoriteList.get(num).getSongList() == null || favoriteList.get(num).getIsDelete() == 1)
                continue;
            integerSet.add(num);// 将不同的数存入HashSet中
        }

        List<Favorite> favorites = new ArrayList<>();
        Iterator<Integer> iterator = integerSet.iterator();
        while (iterator.hasNext()) {
            Favorite favorite = favoriteList.get(iterator.next());
            favorite.setCollectCount(favoriteService.getCollectFavoriteUserByFavoriteId(favorite.getFavoriteId()));
            favorites.add(favorite);
        }
        String jsonString = JSON.toJSONString(favorites);
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
}
