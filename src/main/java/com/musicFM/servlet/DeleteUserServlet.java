package com.musicFM.servlet;

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
import java.util.List;

@WebServlet("/deleteUserServlet")
public class DeleteUserServlet extends HttpServlet {

    private UserService userService = new UserServiceImpl();
    private FavoriteService favoriteService = new FavoriteServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Long userId = Long.parseLong(request.getParameter("userId"));

        userService.deleteAllSingerFromUserByUserId(userId);
        List<Favorite> favoriteList = favoriteService.getUserCreateFavoriteByUserId(userId);
        for (int i = 0; i < favoriteList.size(); ++i) {
            Favorite favorite = favoriteList.get(i);
            favoriteService.deleteAllSongFromFavoriteByFavoriteId(favorite.getFavoriteId());
            favoriteService.deleteFavoriteByFavoriteId(favorite.getFavoriteId());
        }
        Long favoriteId = favoriteService.getLoveFavoriteIdByUserId(userId);
        favoriteService.deleteAllSongFromFavoriteByFavoriteId(favoriteId);
        favoriteService.deleteFavoriteByFavoriteId(favoriteId);
        userService.deleteAllFavoriteFromUserByUserId(userId);
        Integer integer = userService.deleteUserByUserID(userId);
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
