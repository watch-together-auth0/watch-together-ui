export default function formatVideo(v) {
  return {
    id: v.id.videoId,
    title: v.snippet.title,
    thumb_url: v.snippet.thumbnails.medium.url,
  };
}
