package com.musicFM.servlet;

import com.musicFM.service.FavoriteService;
import com.musicFM.service.Impl.FavoriteServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/addCreateFavoriteServlet")
public class AddCreateFavoriteServlet extends HttpServlet {

    private FavoriteService favoriteService = new FavoriteServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");
        Long userId = Long.parseLong(request.getParameter("userId"));
        String favoriteName = request.getParameter("favoriteName");

        favoriteService.insertFavoriteByUserId(userId, favoriteName);
        Long favoriteId = favoriteService.getLastFavorite();
        Integer integer = favoriteService.insertFavoriteToUserByFavoriteIdAndUserId(favoriteId, userId);
        if (integer == 1)
            response.getWriter().write("success");
        else
            response.getWriter().write("wrong");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
}
