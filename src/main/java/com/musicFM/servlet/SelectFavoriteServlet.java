package com.musicFM.servlet;

import com.alibaba.fastjson.JSON;
import com.musicFM.pojo.Favorite;
import com.musicFM.service.FavoriteService;
import com.musicFM.service.Impl.FavoriteServiceImpl;
import com.musicFM.service.Impl.UserServiceImpl;
import com.musicFM.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static java.awt.SystemColor.window;

@WebServlet("/selectFavoriteServlet")
public class SelectFavoriteServlet extends HttpServlet {

    private FavoriteService favoriteService = new FavoriteServiceImpl();
    private UserService userService = new UserServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Long favoriteId = Long.parseLong(request.getParameter("favoriteId"));

        Favorite favorite = favoriteService.getFavoriteById(favoriteId);
        favorite.setCollectCount(favoriteService.getCollectFavoriteUserByFavoriteId(favoriteId));
//        String nickName = userService.getNickNameById(favorite.getAuthorId());
//        request.getSession().setAttribute("nickName",nickName);
        String jsonString = JSON.toJSONString(favorite);
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
}
