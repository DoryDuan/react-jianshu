import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width:960px;
    margin: 0 auto;
    overflow:hidden;
    padding-top:30px;
`
export const HomeLeft = styled.div`
    width:625px;
    margin-left:15px;
    float:left;
    .banner-img{
        width:100%;
    }
`
export const HomeRight = styled.div`
    width:280px;
    float:right;
`
export const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    padding:0 10px;
    cursor:pointer;
`
// topic
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    background：red;
    display:flex;
    flex-wrap: wrap;
    margin-left:-18px;
    border-bottom:1px solid #cdcdcd;
`
export const TopicItem = styled.div`
    display:flex;
    line-height:32px;
    background:#f7f7f7;
    border:1px solid #dcdcdc;
    border-radius:3px;
    padding-right: 10px;
    margin-left:18px;
    margin-bottom:18px;
    img{
        height:32px;
        margin-right:10px;
    }
`
// list
export const ListItem = styled.div`
    padding:20px 0;
    border-bottom:1px solid #cdcdcd;
    display:flex;
    .pic{
        width:125px;
        height:100px;
        border-radius:10px;
    }
`
export const ListInfo = styled.div`
    flex:1;
    margin-right:15px;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        margin-bottom:6px;
        color:#333;
    }
    .desc{
        line-height:24px;
        color:#999;
    }
`
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    text-align:center;
    background:#a5a5a5;
    border-radius:20px;
    margin:30px 0;
    cursor:pointer;
    color:#fff;
`
// recommend
export const RecommendItem = styled.div`
    margin-bottom:6px;
    img{
        width:100%;
    }
`
//write
export const WriterTitle = styled.div`
    margin-top:30px;
    color:#969696;
    margin-bottom:15px;
`
export const WriteSwitch = styled.div`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin{
        font-size:12px;
        margin-right:2px;
        transition: all .2s ease-in;
        display: inline-block;
    }
`
export const WriterItem = styled.div`
    display:flex;
    margin:15px 0;
    .pic{
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }
    .desc{
        flex:1;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        margin-left:8px;
        .info{
            font-size:13px;
            color: #969696;
        }
    }
    .atten{
        color:#42c02e;
        cursor:pointer;
    }
`