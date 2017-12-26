package net.openaudiomc.jclient.modules.socket.objects;

import lombok.Getter;

import net.openaudiomc.jclient.OpenAudioMc;

import net.openaudiomc.jclient.utils.UrlFetcher;
import org.json.JSONException;
import org.json.JSONObject;

public class KeyHolder {

    @Getter private String publickey = "";
    @Getter private String privatekey  = "";

    public KeyHolder(OpenAudioMc plugin) {

        String pukey = plugin.getConfig().getString("key.public");
        String prkey = plugin.getConfig().getString("key.private");

        if (pukey.length() != 15) {
            System.out.println("[OpenAudioMc] This is your first time using OpenAudioMc! welcome! (getting client cridentials)");
            try {

                String webdata = new UrlFetcher().run(new ApiEndpoints().getRESTServer());

                JSONObject newdata = new JSONObject(webdata);
                publickey = newdata.getString("public");
                privatekey = newdata.getString("private");
                plugin.getConfig().set("key.public", publickey);
                plugin.getConfig().set("key.private", privatekey);
                plugin.saveConfig();
            } catch (JSONException e) {
                e.printStackTrace();
            }
            return;
        }

        publickey = pukey;
        privatekey = prkey;
    }

}
