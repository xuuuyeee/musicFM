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

@WebServlet("/selectMyLoveFavoriteServlet")
public class SelectMyLoveFavoriteServlet extends HttpServlet {

    private FavoriteService favoriteService = new FavoriteServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Long userId = Long.parseLong(request.getParameter("userId"));

        List<Favorite> favoriteList = favoriteService.getUserHaveFavoriteByUserId(userId);
        for (Favorite favorite : favoriteList) {
            favorite.setCollectCount(favoriteService.getCollectFavoriteUserByFavoriteId(favorite.getFavoriteId()));
        }
        String jsonString = JSON.toJSONString(favoriteList);
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
}
