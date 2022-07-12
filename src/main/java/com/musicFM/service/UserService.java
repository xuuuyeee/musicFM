package com.musicFM.service;

import com.musicFM.pojo.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserService {

    /**
     * 查询所有用户
     */
    List<User> selectAllUser();

    /**
     * 名字模糊查询用户
     */
    User getUserByName(String userName);

    /**
     * 登录用户
     */
    User loginUserByUserNameAndPwd(String userName, String pwd);

    /**
     * 注册用户
     */
    Integer regestUser(String userName, String pwd, String nickName);

    /**
     * 取消喜欢歌手
     */
    Integer deleteSingerFormUserBySingerIdAndUserId(Long singerId, Long userId);

    /**
     * 取消收藏的某个歌单
     */
    Integer deleteFavoriteFromUserByFavoriteIdAndUserId(Long favoriteID, Long userId);

    /**
     * 删除用户所有喜欢的歌
     */
    Integer deleteAllSingerFromUserByUserId(Long userId);

    /**
     * 删除用户所有的歌单
     */
    Integer deleteAllFavoriteFromUserByUserId(Long userId);

    /**
     * 删除用户
     */
    Integer deleteUserByUserID(Long userId);

    /**
     * 修改昵称
     */
    Integer modifyNickNameByUserIdAndNickName(Long userId, String nickName);

    /**
     * 修改密码
     */
    Integer modifyPwdByUserIdAndAndOldPwdAndNewPwd(Long userId, String oldPwd, String newPwd);

    /**
     * 修改自我介绍
     */
    Integer modifyDescriptionByUserIdAndDescription(Long userId, String description);


    String getNickNameById(Long userId);
}
