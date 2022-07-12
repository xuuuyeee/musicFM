package com.musicFM.servlet;

import com.alibaba.fastjson.JSON;
import com.musicFM.pojo.User;
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
import java.util.ArrayList;
import java.util.List;

@WebServlet("/addRegestUserServlet")
public class AddRegestUserServlet extends HttpServlet {

    private UserService userService = new UserServiceImpl();
    private FavoriteService favoriteService = new FavoriteServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");
        String userName = request.getParameter("userName");
        String pwd = request.getParameter("pwd");
        String nickName = request.getParameter("nickName");

        Integer integer = userService.regestUser(userName, pwd, nickName);
        List<Object> objectList = new ArrayList<>();
        if (integer == 1) {
            objectList.add("success");
            User user = userService.getUserByName(userName);
            favoriteService.insertLoveFavoriteByUserId(user.getUserId(), userName + "的私人歌单");
            Long favoriteId = favoriteService.getLoveFavoriteIdByUserId(user.getUserId());
            favoriteService.insertFavoriteToUserByFavoriteIdAndUserId(favoriteId, user.getUserId());
            objectList.add(user);
        } else
            objectList.add("wrong");
        String jsonString = JSON.toJSONString(objectList);
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
}
