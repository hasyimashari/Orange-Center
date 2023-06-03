import React, { useState } from 'react'

import Edit from "../assets/Edit 1.png"
import Delete from "../assets/Delete 1.png"

import Decision_artikel from './decision_artikel'
import { useNavigate } from 'react-router-dom'

export default function melihat_artikel_admin() {

    const navigate = useNavigate()

    const [deleteDC, setDeleteDC] = useState(false)

    const setEditArtikelPage = () => {
        navigate('/admin-edit-artikel')
    }

    const openDeleteDC = () => {
        setDeleteDC(true)
    }

    const closeDeleteDC = () => {
        setDeleteDC(false)
    }

    return (
        <div className='h-[34rem] flex pl-8 pt-4 pr-8 items-center justify-center'>
            <div className='w-full h-full flex gap-4'>

                {/* gambar artikel */}
                <div className='h-full w-3/12  flex flex-col gap-0.5'>

                    <div className="w-full h-[55%] bg-slate-300 rounded-lg flex">

                    </div>

                    <div className='w-full'>
                        <h1 className='font-bold text-3xl'>Loading...</h1>
                    </div>

                    <div className='w-full'>
                        <h6 className='text-xs text-gray-500'>Loading...</h6>
                    </div>
                </div>

                {/* isi artikel */}
                <div className='h-full w-9/12 overflow-y-auto scrollbar-hide'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper enim ut orci lobortis, ut cursus diam dapibus. Mauris placerat turpis et est sagittis blandit. Donec dignissim tellus a massa tristique, sed scelerisque tortor pharetra. Aenean fringilla velit lacus, eu facilisis nisi ultrices ut. Sed et venenatis felis. Pellentesque vel sapien id sapien feugiat euismod id ac dui. Pellentesque sodales metus laoreet eros blandit laoreet sed sed enim.

                    Nunc condimentum vehicula elit, et tincidunt est lobortis eget. Sed vitae diam feugiat sem congue consequat nec in neque. Cras sit amet ullamcorper urna, at tempus libero. Sed faucibus neque sed augue semper, quis gravida tortor luctus. Curabitur varius leo erat, ut ultricies lorem pretium vel. Sed massa magna, fringilla nec ex non, condimentum porta sapien. Morbi magna arcu, rutrum ac nibh et, venenatis scelerisque mi. Sed et sodales erat, at efficitur orci. Phasellus felis libero, convallis eu erat a, tincidunt placerat lacus. Aenean sed est maximus, sodales justo ac, ultrices eros. Nulla bibendum sapien eu nulla accumsan, eu venenatis orci malesuada. Sed sapien lectus, lobortis eget euismod at, venenatis eget diam. Aliquam non congue lectus. Mauris at ex ipsum. Curabitur vel volutpat magna. Quisque sollicitudin ligula dui, a pharetra neque maximus vel.

                    Sed nec ex est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus sit amet augue sodales, posuere nisi viverra, dignissim nunc. Duis eget gravida orci. Nam sit amet eros sed augue lacinia pellentesque sed molestie massa. In hac habitasse platea dictumst. Donec ut facilisis nibh. Mauris malesuada lorem eu erat gravida, non mollis magna tincidunt. Vivamus nulla lorem, condimentum nec mollis ut, cursus id neque. Nulla facilisi. Etiam egestas lorem enim. Aenean eu diam orci. In lobortis, risus quis tempus faucibus, eros metus varius eros, sed eleifend elit tellus eu nibh. Nullam fringilla ligula non eleifend imperdiet. Maecenas consectetur nisi vitae mauris ullamcorper ornare. Donec ornare sagittis ex, vitae vulputate quam hendrerit tempor.

                    Nulla bibendum congue felis ut dapibus. Maecenas in elit ut orci tempus tincidunt tincidunt in augue. Quisque accumsan felis mi, ut tincidunt mi consequat sed. Sed tincidunt feugiat massa ut luctus. Nulla facilisi. In quis lectus orci. Vestibulum magna sapien, eleifend a odio vitae, fermentum venenatis libero. Morbi tortor orci, malesuada id semper at, venenatis nec quam. Phasellus at nulla laoreet, interdum massa vel, dictum urna. Donec molestie sit amet leo sit amet faucibus. Integer vel fringilla neque.

                    Quisque nec enim eu urna laoreet interdum vitae sed libero. Integer sagittis egestas nunc, commodo porttitor lorem eleifend nec. Aenean nulla mauris, auctor nec porttitor id, placerat at odio. Nullam sed blandit nisl. Suspendisse vel laoreet tellus. Nam vitae felis tellus. Duis ullamcorper laoreet euismod. Aenean vitae felis fringilla, dapibus metus eu, tincidunt odio. Pellentesque feugiat tellus a ipsum egestas convallis. Vestibulum ornare eleifend erat iaculis volutpat. Donec sit amet nunc sapien. Morbi at dui ut urna vestibulum pellentesque eu eu lorem. Mauris sem nunc, venenatis sit amet dapibus quis, suscipit eu ligula. Aenean ac ornare est, a pulvinar quam.
                    </p>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper enim ut orci lobortis, ut cursus diam dapibus. Mauris placerat turpis et est sagittis blandit. Donec dignissim tellus a massa tristique, sed scelerisque tortor pharetra. Aenean fringilla velit lacus, eu facilisis nisi ultrices ut. Sed et venenatis felis. Pellentesque vel sapien id sapien feugiat euismod id ac dui. Pellentesque sodales metus laoreet eros blandit laoreet sed sed enim.

                    Nunc condimentum vehicula elit, et tincidunt est lobortis eget. Sed vitae diam feugiat sem congue consequat nec in neque. Cras sit amet ullamcorper urna, at tempus libero. Sed faucibus neque sed augue semper, quis gravida tortor luctus. Curabitur varius leo erat, ut ultricies lorem pretium vel. Sed massa magna, fringilla nec ex non, condimentum porta sapien. Morbi magna arcu, rutrum ac nibh et, venenatis scelerisque mi. Sed et sodales erat, at efficitur orci. Phasellus felis libero, convallis eu erat a, tincidunt placerat lacus. Aenean sed est maximus, sodales justo ac, ultrices eros. Nulla bibendum sapien eu nulla accumsan, eu venenatis orci malesuada. Sed sapien lectus, lobortis eget euismod at, venenatis eget diam. Aliquam non congue lectus. Mauris at ex ipsum. Curabitur vel volutpat magna. Quisque sollicitudin ligula dui, a pharetra neque maximus vel.

                    Sed nec ex est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus sit amet augue sodales, posuere nisi viverra, dignissim nunc. Duis eget gravida orci. Nam sit amet eros sed augue lacinia pellentesque sed molestie massa. In hac habitasse platea dictumst. Donec ut facilisis nibh. Mauris malesuada lorem eu erat gravida, non mollis magna tincidunt. Vivamus nulla lorem, condimentum nec mollis ut, cursus id neque. Nulla facilisi. Etiam egestas lorem enim. Aenean eu diam orci. In lobortis, risus quis tempus faucibus, eros metus varius eros, sed eleifend elit tellus eu nibh. Nullam fringilla ligula non eleifend imperdiet. Maecenas consectetur nisi vitae mauris ullamcorper ornare. Donec ornare sagittis ex, vitae vulputate quam hendrerit tempor.

                    Nulla bibendum congue felis ut dapibus. Maecenas in elit ut orci tempus tincidunt tincidunt in augue. Quisque accumsan felis mi, ut tincidunt mi consequat sed. Sed tincidunt feugiat massa ut luctus. Nulla facilisi. In quis lectus orci. Vestibulum magna sapien, eleifend a odio vitae, fermentum venenatis libero. Morbi tortor orci, malesuada id semper at, venenatis nec quam. Phasellus at nulla laoreet, interdum massa vel, dictum urna. Donec molestie sit amet leo sit amet faucibus. Integer vel fringilla neque.

                    Quisque nec enim eu urna laoreet interdum vitae sed libero. Integer sagittis egestas nunc, commodo porttitor lorem eleifend nec. Aenean nulla mauris, auctor nec porttitor id, placerat at odio. Nullam sed blandit nisl. Suspendisse vel laoreet tellus. Nam vitae felis tellus. Duis ullamcorper laoreet euismod. Aenean vitae felis fringilla, dapibus metus eu, tincidunt odio. Pellentesque feugiat tellus a ipsum egestas convallis. Vestibulum ornare eleifend erat iaculis volutpat. Donec sit amet nunc sapien. Morbi at dui ut urna vestibulum pellentesque eu eu lorem. Mauris sem nunc, venenatis sit amet dapibus quis, suscipit eu ligula. Aenean ac ornare est, a pulvinar quam.
                    </p>
                </div>

                {/* delete */}
                <div onClick={openDeleteDC} className="absolute bottom-36 end-12 w-14 h-14 bg-gradient-to-tr from-[#F77979] from-4%  to-[#B4161B] to-90% hover:brightness-90 rounded-full flex cursor-pointer">
                    <img src={Delete} className="h-[2rem] w-[2rem] mx-auto my-auto" />
                </div>

                {/* edit */}
                <div onClick={setEditArtikelPage} className="absolute bottom-16 end-12 w-14 h-14 bg-gradient-to-tr from-[#4E944F] from-4% to-[#B4E197] to-90% hover:brightness-90 rounded-full flex cursor-pointer">
                    <img src={Edit} className="h-[2rem] w-[2rem] mx-auto my-auto" />
                </div>
            </div>

            <Decision_artikel onCloseDc={closeDeleteDC} visibleDc={deleteDC} />
            {/* nilaiDc={} onDelete={} */}
        </div>
    )
}
