package com.musicFM.mapper;

import com.musicFM.pojo.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper {
    /**
     * 查询所有用户
     */
    List<User> selectAllUser();

    /**
     * 名字查询用户
     *
     * @param userName
     * @return
     */
    User getUserByName(@Param("userName") String userName);

    /**
     * 登录用户
     *
     * @param userName
     * @param pwd
     * @return
     */
    User loginUserByUserNameAndPwd(@Param("userName") String userName, @Param("pwd") String pwd);

    /**
     * 注册用户
     *
     * @param userName
     * @param pwd
     * @param nickName
     * @return
     */
    Integer regestUser(@Param("userName") String userName, @Param("pwd") String pwd, @Param("nickName") String nickName);

    /**
     * 取消喜欢歌手
     *
     * @param singerId
     * @param singerId
     * @return
     */
    Integer deleteSingerFormUserBySingerIdAndUserId(@Param("singerId") Long singerId, @Param("userId") Long userId);


    /**
     * 取消收藏的某个歌单
     *
     * @param favoriteID
     * @param userId
     * @return
     */
    Integer deleteFavoriteFromUserByFavoriteIdAndUserId(@Param("favoriteId") Long favoriteID, @Param("userId") Long userId);


    /**
     * 删除用户所有喜欢的歌
     *
     * @param userId
     * @return
     */
    Integer deleteAllSingerFromUserByUserId(@Param("userId") Long userId);

    /**
     * 删除用户所有的歌单
     *
     * @param userId
     * @return
     */
    Integer deleteAllFavoriteFromUserByUserId(@Param("userId") Long userId);

    /**
     * 删除用户
     *
     * @param userId
     * @return
     */
    Integer deleteUserByUserID(@Param("userId") Long userId);

    /**
     * 修改昵称
     *
     * @param userId
     * @param nickName
     * @return
     */
    Integer modifyNickNameByUserIdAndNickName(@Param("userId") Long userId, @Param("nickName") String nickName);

    /**
     * 修改密码
     *
     * @param userId
     * @param oldPwd
     * @param newPwd
     * @return
     */
    Integer modifyPwdByUserIdAndAndOldPwdAndNewPwd(@Param("userId") Long userId, @Param("oldPwd") String oldPwd, @Param("newPwd") String newPwd);

    /**
     * 修改自我介绍
     *
     * @param userId
     * @param description
     * @return
     */
    Integer modifyDescriptionByUserIdAndDescription(@Param("userId") Long userId, @Param("description") String description);

    /**
     *
     */
    String getNickNameById(@Param("userId") Long userId);


}
