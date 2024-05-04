import Image from "next/image"

const posts = [
    {
      id: 1,
      title: 'Love Problem Solution',
      imageUrl:
          'https://images.pexels.com/photos/5700170/pexels-photo-5700170.jpeg?auto=compress&cs=tinysrgb&w=600', 
      href: '#',
      description:
        'Love Problem Solution Every problem has solution in the world. But there is need to choose the right way to solve the problem. We also know that it is very difficult to find a true love in the world.',
     
      category: { title: 'Call Now', href: '#' },
     
    },
    {
      id: 1,
      title: 'Love Marriage Specialist',
      imageUrl:
          'https://images.pexels.com/photos/7686327/pexels-photo-7686327.jpeg?auto=compress&cs=tinysrgb&w=600', 
      href: '#',
      description:
        'There are many those who never want to face Marriage Problems and now all those people can use astrology just to make any kind of before and after marriage solved soon.',
    
      category: { title: 'Call Now', href: '#' },
     
    },
    {
      id: 1,
      title: 'Extra Marital Affair',
      imageUrl:
      'https://images.pexels.com/photos/1024970/pexels-photo-1024970.jpeg?auto=compress&cs=tinysrgb&w=600', 
      href: '#',
      description:
        'Yes, extramarital affair of husband or wife, are quite eliminable through astrological solutions for all future years*.Vedic astrology contains opulent information about certain situations.',
     
      category: { title: 'Call Now', href: '#' },
      
    },
    {
      id: 1,
      title: 'Relationship Problems',
      imageUrl:
      'https://images.pexels.com/photos/6383158/pexels-photo-6383158.jpeg?auto=compress&cs=tinysrgb&w=600', 
      href: '#',
      description:
        'Relationships are essential for our well being. Throughout our lifetime, we meet new people and live with different people like spouse, parents, relatives, etc. Consult now for solution.',
      
      category: { title: 'Call Now', href: '#' },
      
    },
    {
      id: 1,
      title: 'Divorce Problem Solution',
      imageUrl:
      'https://images.pexels.com/photos/6383158/pexels-photo-6383158.jpeg?auto=compress&cs=tinysrgb&w=600', 
      href: '#',
      description:
        'Divorce Problem is a major concern for a person and now they can use astrology just to make a relationship better for them once again by removing disputes between the couple.',
      
      category: { title: 'Call Now', href: '#' },
      
    },
    {
      id: 1,
      title: 'Business Problems',
      imageUrl:
      'https://images.pexels.com/photos/4458420/pexels-photo-4458420.jpeg?auto=compress&cs=tinysrgb&w=600', 
      href: '#',
      description:
        'There are many people who need Job or Business Problem solution just to lead a better life by ending the hurdles which are important for business and job growth.',
     
      category: { title: 'Call Now', href: '#' },
      
    },
   
  ]
  
  export default function Post() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mx-auto w-full lg:mx-0">
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl text-red-600 bold">” FEEL THE SOUL WITH GYANENDER ACHARYA”</h2>
            <p className="mt-2 text-lg leading-8 text-red-600 lg:ml-4">
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। 
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between"> 
               <Image src={post.imageUrl} height={300} width={300} className="rounded-lg" alt="temp"/>
                
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
               
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  