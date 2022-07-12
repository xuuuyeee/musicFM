package com.musicFM.servlet;

import com.alibaba.fastjson.JSON;
import com.musicFM.pojo.Favorite;
import com.musicFM.pojo.Singer;
import com.musicFM.service.FavoriteService;
import com.musicFM.service.Impl.FavoriteServiceImpl;
import com.musicFM.service.Impl.SingerServiceImpl;
import com.musicFM.service.SingerService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/selectMyLoveSingerServlet")
public class SelectMyLoveSingerServlet extends HttpServlet {

    private SingerService singerService = new SingerServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Long userId = Long.parseLong(request.getParameter("userId"));

        List<Singer> singerList = singerService.getLoveSingerByUserId(userId);
        for (Singer singer:singerList) {
            singer.setFansCount(singerService.getCollectSingerUserBySingerId(singer.getSingerId()));
        }
        String jsonString = JSON.toJSONString(singerList);
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
}
