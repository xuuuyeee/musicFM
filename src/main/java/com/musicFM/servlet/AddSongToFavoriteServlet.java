package com.musicFM.servlet;

import com.musicFM.pojo.Favorite;
import com.musicFM.pojo.Song;
import com.musicFM.service.FavoriteService;
import com.musicFM.service.Impl.FavoriteServiceImpl;
import com.musicFM.service.Impl.SongServiceImpl;
import com.musicFM.service.SongService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/addSongToFavoriteServlet")
public class AddSongToFavoriteServlet extends HttpServlet {

    private FavoriteService favoriteService = new FavoriteServiceImpl();
    private SongService songService = new SongServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Long songId = Long.parseLong(request.getParameter("songId"));
        Long favoriteId = Long.parseLong(request.getParameter("favoriteId"));

        Integer integer =favoriteService.insertSongToFavoriteByFavoriteIdAndSongId(favoriteId, songId);
        Favorite favorite = favoriteService.getFavoriteById(favoriteId);
        if(favorite.getSongList().size() == 1){
            Song song = songService.getSongById(songId);
            integer = favoriteService.addPictureToFavoriteByFavoriteIdAndPictureHref(favoriteId, song.getPictureHref());
        }
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
