import Profile from '@/components/Profile'

type CommentItemProps = {
    comment: string
}

function CommentItem({comment}: CommentItemProps) {
  return (
    <div className='flex items-center my-3'>
        <Profile className='flex-1'/>
        <p className='w-[80%] text-sm'>{comment}</p>
    </div>
  )
}

export default CommentItem