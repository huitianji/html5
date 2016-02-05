/**
 * Created by Administrator on 16-2-5.
 */
function getClassName(obj,sName)      //-->obj是要获取元素的父级
{                                     //-->sName是class名字
    if(document.getElementsByClassName)
    {
        return obj.getElementsByClassName('sName');
    }
    else
    {
        var aTmp = obj.getElementsByTagName('*');
        var aRes=[];
        var arr =[];

        for(var i=0;i<aTmp.length;i++)
        {
            arr = aTmp[i].className.split(' ');
            for (var j=0;j<arr.length;j++)
            {
                if(arr[j] == sName)
                {
                    aRes.push(aTmp[i]);
                }
            }
        }
        return aRes;
    }
}