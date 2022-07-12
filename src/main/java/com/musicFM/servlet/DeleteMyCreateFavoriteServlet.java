package com.musicFM.servlet;

import com.musicFM.service.FavoriteService;
import com.musicFM.service.Impl.FavoriteServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/deleteMyCreateFavoriteServlet")
public class DeleteMyCreateFavoriteServlet extends HttpServlet {

    private FavoriteService favoriteService = new FavoriteServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Long favoriteId = Long.parseLong(request.getParameter("favoriteId"));

        favoriteService.deleteAllSongFromFavoriteByFavoriteId(favoriteId);
        favoriteService.deleteFavoriteByFavoriteId(favoriteId);
        Integer integer = favoriteService.deleteFavoriteFromAllUserByFavoriteId(favoriteId);
        if (integer != 0)
            response.getWriter().write("success");
        else
            response.getWriter().write("wrong");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
}
