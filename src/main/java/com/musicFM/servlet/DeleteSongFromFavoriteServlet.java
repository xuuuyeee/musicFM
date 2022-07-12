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

@WebServlet("/deleteSongFromFavoriteServlet")
public class DeleteSongFromFavoriteServlet extends HttpServlet {

    private FavoriteService favoriteService = new FavoriteServiceImpl();
    private SongService songService = new SongServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Long favoriteId = Long.parseLong(request.getParameter("favoriteId"));
        Long songId = Long.parseLong(request.getParameter("songId"));

        Favorite favorite = favoriteService.getFavoriteById(favoriteId);
        Song song = songService.getSongById(songId);
        Integer integer = favoriteService.deleteSongFromFavoriteBySongIdAndFavoriteId(songId, favoriteId);
        if(song.getPictureHref().equals(favorite.getFavoritePictureHref())){
            if(favorite.getSongList().size() != 1){
                if(favorite.getSongList().get(0).getSongId() == song.getSongId())
                    favoriteService.addPictureToFavoriteByFavoriteIdAndPictureHref(favoriteId,favorite.getSongList().get(1).getPictureHref());
                else
                    favoriteService.addPictureToFavoriteByFavoriteIdAndPictureHref(favoriteId,favorite.getSongList().get(0).getPictureHref());
            }
            else
                favoriteService.addPictureToFavoriteByFavoriteIdAndPictureHref(favoriteId,"/MusicFM/musicFmSrc/songPic/101.png");
        }
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
