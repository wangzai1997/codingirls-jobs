let status=0;

const data={

    title:"电话销售",
    postData:'2017-07-01',
    catagory:'娱乐休闲/餐饮/服务+互联网/电子商务+咨询/顾问',
    jobtype:'全职',
    number:'2-3',
    company:"北京麦斯德投资基金管理有限公司",
    address:"北京市朝阳区建外SOHO7号楼20层2001",
    contact:"赵经理",
    apply:"18810484792",
    city: "北京",
    country:'中国',
    salary:"3000-5000",
    job_description:"<p>无责底薪4K+高提+转正五险+高福利，有意者电话联系！<br>岗位职责：<br>1、利用网络进行公司产品的销售及推广；<br>2、负责公司网上贸易平台的操作管理和产品信息的发布；<br>3、了解和搜集网络上各同行及竞争产品的动态信息；<br>4、通过网络进行渠道开发和业务拓展；<br>5、按时完成销售任务。<br>任职资格：<br>1、专科及以上学历，市场营销等相关专业；<br>2、2年以上网络销售工作经验，具有网络销售渠道者优先；<br>3、精通各种网络销售技巧，有网上开店等相关工作经验，熟悉各大门户网站及各网购网站；<br>4、熟悉互联网络，熟练使用网络交流工具和各种办公软件；<br>5、有较强的沟通能力。<br>工作时间：早上：9:00<br> 晚上：6:00 周末双休</p>"
};
const jobs=[
    {
        jobId:2,
        title:"电话销售X",
        postData:'2017-07-01',
        catagory:'娱乐休闲/餐饮/服务+互联网/电子商务+咨询/顾问',
        jobtype:'全职',
        number:'2-3',
        company:"北京麦斯德投资基金管理有限公司",
        address:"北京市朝阳区建外SOHO7号楼20层2001",
        contact:"赵经理",
        apply:"18810484792",
        city: "北京",
        country:'中国',
        salary:"3000-5000",
        job_description:"<p>无责底薪4K+高提+转正五险+高福利，有意者电话联系！<br>岗位职责：<br>1、利用网络进行公司产品的销售及推广；<br>2、负责公司网上贸易平台的操作管理和产品信息的发布；<br>3、了解和搜集网络上各同行及竞争产品的动态信息；<br>4、通过网络进行渠道开发和业务拓展；<br>5、按时完成销售任务。<br>任职资格：<br>1、专科及以上学历，市场营销等相关专业；<br>2、2年以上网络销售工作经验，具有网络销售渠道者优先；<br>3、精通各种网络销售技巧，有网上开店等相关工作经验，熟悉各大门户网站及各网购网站；<br>4、熟悉互联网络，熟练使用网络交流工具和各种办公软件；<br>5、有较强的沟通能力。<br>工作时间：早上：9:00<br> 晚上：6:00 周末双休</p>"
    },
    {
        jobId:3,
        title:"电话销售Y",
        postData:'2017-07-01',
        catagory:'娱乐休闲/餐饮/服务+互联网/电子商务+咨询/顾问',
        jobtype:'全职',
        number:'2-3',
        company:"北京麦斯德投资基金管理有限公司",
        address:"北京市朝阳区建外SOHO7号楼20层2001",
        contact:"赵经理",
        apply:"18810484792",
        city: "北京",
        country:'中国',
        salary:"3000-5000",
        job_description:"<p>无责底薪4K+高提+转正五险+高福利，有意者电话联系！<br>岗位职责：<br>1、利用网络进行公司产品的销售及推广；<br>2、负责公司网上贸易平台的操作管理和产品信息的发布；<br>3、了解和搜集网络上各同行及竞争产品的动态信息；<br>4、通过网络进行渠道开发和业务拓展；<br>5、按时完成销售任务。<br>任职资格：<br>1、专科及以上学历，市场营销等相关专业；<br>2、2年以上网络销售工作经验，具有网络销售渠道者优先；<br>3、精通各种网络销售技巧，有网上开店等相关工作经验，熟悉各大门户网站及各网购网站；<br>4、熟悉互联网络，熟练使用网络交流工具和各种办公软件；<br>5、有较强的沟通能力。<br>工作时间：早上：9:00<br> 晚上：6:00 周末双休</p>"
    },
    {
        jobId:4,
        title:"电话销售Z",
        postData:'2017-07-01',
        catagory:'娱乐休闲/餐饮/服务+互联网/电子商务+咨询/顾问',
        jobtype:'全职',
        number:'2-3',
        company:"北京麦斯德投资基金管理有限公司",
        address:"北京市朝阳区建外SOHO7号楼20层2001",
        contact:"赵经理",
        apply:"18810484792",
        city: "北京",
        country:'中国',
        salary:"3000-5000",
        job_description:"<p>无责底薪4K+高提+转正五险+高福利，有意者电话联系！<br>岗位职责：<br>1、利用网络进行公司产品的销售及推广；<br>2、负责公司网上贸易平台的操作管理和产品信息的发布；<br>3、了解和搜集网络上各同行及竞争产品的动态信息；<br>4、通过网络进行渠道开发和业务拓展；<br>5、按时完成销售任务。<br>任职资格：<br>1、专科及以上学历，市场营销等相关专业；<br>2、2年以上网络销售工作经验，具有网络销售渠道者优先；<br>3、精通各种网络销售技巧，有网上开店等相关工作经验，熟悉各大门户网站及各网购网站；<br>4、熟悉互联网络，熟练使用网络交流工具和各种办公软件；<br>5、有较强的沟通能力。<br>工作时间：早上：9:00<br> 晚上：6:00 周末双休</p>"
    },
    {
        jobId:5,
        title:"电话销售O",
        postData:'2017-07-01',
        catagory:'娱乐休闲/餐饮/服务+互联网/电子商务+咨询/顾问',
        jobtype:'全职',
        number:'2-3',
        company:"北京麦斯德投资基金管理有限公司",
        address:"北京市朝阳区建外SOHO7号楼20层2001",
        contact:"赵经理",
        apply:"18810484792",
        city: "北京",
        country:'中国',
        salary:"3000-5000",
        job_description:"<p>无责底薪4K+高提+转正五险+高福利，有意者电话联系！<br>岗位职责：<br>1、利用网络进行公司产品的销售及推广；<br>2、负责公司网上贸易平台的操作管理和产品信息的发布；<br>3、了解和搜集网络上各同行及竞争产品的动态信息；<br>4、通过网络进行渠道开发和业务拓展；<br>5、按时完成销售任务。<br>任职资格：<br>1、专科及以上学历，市场营销等相关专业；<br>2、2年以上网络销售工作经验，具有网络销售渠道者优先；<br>3、精通各种网络销售技巧，有网上开店等相关工作经验，熟悉各大门户网站及各网购网站；<br>4、熟悉互联网络，熟练使用网络交流工具和各种办公软件；<br>5、有较强的沟通能力。<br>工作时间：早上：9:00<br> 晚上：6:00 周末双休</p>"
    }

];

$(document).ready(loadRecommendJobs(1,jobs));

function loadInfo() {
    let jobId=GetQueryString("jobId");
    if(jobId !=null && jobId.toString().length>1) {
        getJobDetailFromSQ(jobId);
        getRecommendJobsFromSQ(jobId);
    }

}
function GetQueryString(name)
{
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if(r!=null)return unescape(r[2]); return null;
}

function getLogOrNot(status) {
    if(status==0){
        $("#judgeWhetherLog").append(`<ul class="lg_tbar_r">
            <li>
            <a href="login.html" data-lg-tj-id="5f00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow">登录</a>
            </li>
            <li>
            <a href="register.html" class="bl" data-lg-tj-id="5g00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow">注册</a>
            </li>
            </ul>`);
    }
    else {
        $("#judgeWhetherLog").append(`<ul class="lg_tbar_r">
            <li>
            <a href="" data-lg-tj-id="5f00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow">Hello ~</a>
            </li>
            <li>
            <a href="person.html" class="bl" data-lg-tj-id="5g00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow">欢迎进入个人中心</a>
            </li>
            </ul>`);
    }
}

function getJobDetailFromSQ(jobId) {
    debugger;
 $.get(
     '47.93.200.205:8080/detail?jobId='+jobId,
     function (jobInfo) {
         debugger;
         loadJobInfo(jobInfo);
     }
 )
}
function getRecommendJobsFromSQ(jobId) {
    $.ajax({
        type: 'GET',
        url:"47.93.200.205:8080/detail/"+jobId+'/similar',
        success: function(jobs) {
            loadRecommendJobs(jobId,jobs.slice(0,5));
        }
    })
}
function loadJobInfo(jobInfo) {

    $("#jobTitle").text(jobInfo.title);
    $("#postData").text('发布时间: '+jobInfo.postData);
    $("#tags").text(jobInfo.tags);
    $("#catagory").text(jobInfo.catagory);
    $("#jobtype").text(jobInfo.jobtype);
    $("#salary").text(jobInfo.salary+'元');
    $("#address").text(jobInfo.address);
    $("#number").text(jobInfo.number+'人');

    $("#jobDescription").append(jobInfo.job_description);//引入富文本编辑

    $("#apply").text(jobInfo.apply);

    $("#company").text(jobInfo.company);
    $("#country").text(jobInfo.country);
    $("#city").text(jobInfo.city);

}

function loadRecommendJobs(jobId,jobs) {
    let count = 0;
    debugger;
    for (let job of jobs) {
        debugger;
        if (jobId != job.jobId) {
            debugger;
            $("#recommendJobs").append(`<li>
            <a class="link" href="47.93.200.205:8080/detail?jobId=${job.jobId}">${job.title}</a><br>
            <span>${job.postData}</span>
            </li>`);
            debugger;
            count++;
        }
        if (count == 4) break;
    }
}