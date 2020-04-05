exports.seed = (knex) => {
  const tableName = 'comments';
  // remove all existing data from table
  return knex(tableName).del()
    .then(() => {
      // insert new data into table
      return knex(tableName).insert([
        {
          post_id: 1,
          id: 1,
          user_id: 1,
          body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
        },
        {
          post_id: 1,
          id: 2,
          user_id: 1,
          body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
        },
        {
          post_id: 1,
          id: 3,
          user_id: 1,
          body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'
        },
        {
          post_id: 1,
          id: 4,
          user_id: 1,
          body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati'
        },
        {
          post_id: 1,
          id: 5,
          user_id: 1,
          body: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et'
        },
        {
          post_id: 2,
          id: 6,
          user_id: 2,
          body: 'doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in'
        },
        {
          post_id: 2,
          id: 7,
          user_id: 2,
          body: 'maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor'
        },
        {
          post_id: 2,
          id: 8,
          user_id: 2,
          body: 'ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque'
        },
        {
          post_id: 2,
          id: 9,
          user_id: 2,
          body: 'sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus'
        },
        {
          post_id: 2,
          id: 10,
          user_id: 2,
          body: 'voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis'
        },
        {
          post_id: 3,
          id: 11,
          user_id: 2,
          body: 'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea'
        },
        {
          post_id: 3,
          id: 12,
          user_id: 2,
          body: 'expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit'
        },
        {
          post_id: 3,
          id: 13,
          user_id: 2,
          body: 'fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et'
        },
        {
          post_id: 3,
          id: 14,
          user_id: 2,
          body: 'vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum'
        },
        {
          post_id: 3,
          id: 15,
          user_id: 3,
          body: 'nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia'
        },
        {
          post_id: 4,
          id: 16,
          user_id: 3,
          body: 'iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis'
        },
        {
          post_id: 4,
          id: 17,
          user_id: 3,
          body: 'consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore'
        },
        {
          post_id: 4,
          id: 18,
          user_id: 3,
          body: 'veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias'
        },
        {
          post_id: 4,
          id: 19,
          user_id: 3,
          body: 'doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut'
        },
        {
          post_id: 4,
          id: 20,
          user_id: 3,
          body: 'qui harum consequatur fugiat\net eligendi perferendis at molestiae commodi ducimus\ndoloremque asperiores numquam qui\nut sit dignissimos reprehenderit tempore'
        },
        {
          post_id: 5,
          id: 21,
          user_id: 3,
          body: 'deleniti aut sed molestias explicabo\ncommodi odio ratione nesciunt\nvoluptate doloremque est\nnam autem error delectus'
        },
        {
          post_id: 5,
          id: 22,
          user_id: 3,
          body: 'qui ipsa animi nostrum praesentium voluptatibus odit\nqui non impedit cum qui nostrum aliquid fuga explicabo\nvoluptatem fugit earum voluptas exercitationem temporibus dignissimos distinctio\nesse inventore reprehenderit quidem ut incidunt nihil necessitatibus rerum'
        },
        {
          post_id: 5,
          id: 23,
          user_id: 3,
          body: 'voluptates provident repellendus iusto perspiciatis ex fugiat ut\nut dolor nam aliquid et expedita voluptate\nsunt vitae illo rerum in quos\nvel eligendi enim quae fugiat est'
        },
        {
          post_id: 5,
          id: 24,
          user_id: 3,
          body: 'repudiandae repellat quia\nsequi est dolore explicabo nihil et\net sit et\net praesentium iste atque asperiores tenetur'
        },
        {
          post_id: 5,
          id: 25,
          user_id: 3,
          body: 'sunt aut quae laboriosam sit ut impedit\nadipisci harum laborum totam deleniti voluptas odit rem ea\nnon iure distinctio ut velit doloribus\net non ex'
        },
        {
          post_id: 6,
          id: 26,
          user_id: 4,
          body: 'incidunt sapiente eaque dolor eos\nad est molestias\nquas sit et nihil exercitationem at cumque ullam\nnihil magnam et'
        },
        {
          post_id: 6,
          id: 27,
          user_id: 4,
          body: 'nisi vel quas ut laborum ratione\nrerum magni eum\nunde et voluptatem saepe\nvoluptas corporis modi amet ipsam eos saepe porro'
        },
        {
          post_id: 6,
          id: 28,
          user_id: 4,
          body: 'voluptatem repellendus quo alias at laudantium\nmollitia quidem esse\ntemporibus consequuntur vitae rerum illum\nid corporis sit id'
        },
        {
          post_id: 6,
          id: 29,
          user_id: 4,
          body: 'tempora voluptatem est\nmagnam distinctio autem est dolorem\net ipsa molestiae odit rerum itaque corporis nihil nam\neaque rerum error'
        },
        {
          post_id: 6,
          id: 30,
          user_id: 4,
          body: 'consequuntur quia voluptate assumenda et\nautem voluptatem reiciendis ipsum animi est provident\nearum aperiam sapiente ad vitae iste\naccusantium aperiam eius qui dolore voluptatem et'
        },
        {
          post_id: 7,
          id: 31,
          user_id: 4,
          body: 'quia incidunt ut\naliquid est ut rerum deleniti iure est\nipsum quia ea sint et\nvoluptatem quaerat eaque repudiandae eveniet aut'
        },
        {
          post_id: 7,
          id: 32,
          user_id: 4,
          body: 'nihil ea itaque libero illo\nofficiis quo quo dicta inventore consequatur voluptas voluptatem\ncorporis sed necessitatibus velit tempore\nrerum velit et temporibus'
        },
        {
          post_id: 7,
          id: 33,
          user_id: 4,
          body: 'fugit harum quae vero\nlibero unde tempore\nsoluta eaque culpa sequi quibusdam nulla id\net et necessitatibus'
        },
        {
          post_id: 7,
          id: 34,
          user_id: 4,
          body: 'omnis temporibus quasi ab omnis\nfacilis et omnis illum quae quasi aut\nminus iure ex rem ut reprehenderit\nin non fugit'
        },
        {
          post_id: 7,
          id: 35,
          user_id: 4,
          body: 'dolor mollitia quidem facere et\nvel est ut\nut repudiandae est quidem dolorem sed atque\nrem quia aut adipisci sunt'
        },
        {
          post_id: 8,
          id: 36,
          user_id: 4,
          body: 'aut vero est\ndolor non aut excepturi dignissimos illo nisi aut quas\naut magni quia nostrum provident magnam quas modi maxime\nvoluptatem et molestiae'
        },
        {
          post_id: 8,
          id: 37,
          user_id: 4,
          body: 'qui rem amet aut\ncumque maiores earum ut quia sit nam esse qui\niusto aspernatur quis voluptas\ndolorem distinctio ex temporibus rem'
        },
        {
          post_id: 8,
          id: 38,
          user_id: 4,
          body: 'unde voluptatem qui dicta\nvel ad aut eos error consequatur voluptatem\nadipisci doloribus qui est sit aut\nvelit aut et ea ratione eveniet iure fuga'
        },
        {
          post_id: 8,
          id: 39,
          user_id: 4,
          body: 'atque consequatur dolorem sunt\nadipisci autem et\nvoluptatibus et quae necessitatibus rerum eaque aperiam nostrum nemo\neligendi sed et beatae et inventore'
        },
        {
          post_id: 8,
          id: 40,
          user_id: 4,
          body: 'quod minus alias quos\nperferendis labore molestias quae ut ut corporis deserunt vitae\net quaerat ut et ullam unde asperiores\ncum voluptatem cumque'
        },
        {
          post_id: 9,
          id: 41,
          user_id: 4,
          body: 'facere repudiandae vitae ea aut sed quo ut et\nfacere nihil ut voluptates in\nsaepe cupiditate accusantium numquam dolores\ninventore sint mollitia provident'
        },
        {
          post_id: 9,
          id: 42,
          user_id: 4,
          body: 'aut culpa quaerat veritatis eos debitis\naut repellat eius explicabo et\nofficiis quo sint at magni ratione et iure\nincidunt quo sequi quia dolorum beatae qui'
        },
        {
          post_id: 9,
          id: 43,
          user_id: 4,
          body: 'voluptatem ut possimus laborum quae ut commodi delectus\nin et consequatur\nin voluptas beatae molestiae\nest rerum laborum et et velit sint ipsum dolorem'
        },
        {
          post_id: 9,
          id: 44,
          user_id: 4,
          body: 'qui sunt commodi\nsint vel optio vitae quis qui non distinctio\nid quasi modi dicta\neos nihil sit inventore est numquam officiis'
        },
        {
          post_id: 9,
          id: 45,
          user_id: 4,
          body: 'ipsum odio harum voluptatem sunt cumque et dolores\nnihil laboriosam neque commodi qui est\nquos numquam voluptatum\ncorporis quo in vitae similique cumque tempore'
        },
        {
          post_id: 10,
          id: 46,
          user_id: 4,
          body: 'exercitationem et id quae cum omnis\nvoluptatibus accusantium et quidem\nut ipsam sint\ndoloremque illo ex atque necessitatibus sed'
        },
        {
          post_id: 10,
          id: 47,
          user_id: 4,
          body: 'occaecati laudantium ratione non cumque\nearum quod non enim soluta nisi velit similique voluptatibus\nesse laudantium consequatur voluptatem rem eaque voluptatem aut ut\net sit quam'
        },
        {
          post_id: 10,
          id: 48,
          user_id: 4,
          body: 'illum et alias quidem magni voluptatum\nab soluta ea qui saepe corrupti hic et\ncum repellat esse\nest sint vel veritatis officia consequuntur cum'
        },
        {
          post_id: 10,
          id: 49,
          user_id: 5,
          body: 'id est iure occaecati quam similique enim\nab repudiandae non\nillum expedita quam excepturi soluta qui placeat\nperspiciatis optio maiores non doloremque aut iusto sapiente'
        },
        {
          post_id: 10,
          id: 50,
          user_id: 5,
          body: 'eum accusamus aut delectus\narchitecto blanditiis quia sunt\nrerum harum sit quos quia aspernatur vel corrupti inventore\nanimi dicta vel corporis'
        },
        {
          post_id: 11,
          id: 51,
          user_id: 5,
          body: 'perferendis omnis esse\nvoluptate sit mollitia sed perferendis\nnemo nostrum qui\nvel quis nisi doloribus animi odio id quas'
        },
        {
          post_id: 11,
          id: 52,
          user_id: 5,
          body: 'et enim voluptatem totam laudantium\nimpedit nam labore repellendus enim earum aut\nconsectetur mollitia fugit qui repellat expedita sunt\naut fugiat vel illo quos aspernatur ducimus'
        },
        {
          post_id: 11,
          id: 53,
          user_id: 5,
          body: 'a at tempore\nmolestiae odit qui dolores molestias dolorem et\nlaboriosam repudiandae placeat quisquam\nautem aperiam consectetur maiores laboriosam nostrum'
        },
        {
          post_id: 11,
          id: 54,
          user_id: 5,
          body: 'et ipsa rem ullam cum pariatur similique quia\ncum ipsam est sed aut inventore\nprovident sequi commodi enim inventore assumenda aut aut\ntempora possimus soluta quia consequatur modi illo'
        },
        {
          post_id: 11,
          id: 55,
          user_id: 5,
          body: 'perferendis eaque labore laudantium ut molestiae soluta et\nvero odio non corrupti error pariatur consectetur et\nenim nam quia voluptatum non\nmollitia culpa facere voluptas suscipit veniam'
        },
        {
          post_id: 12,
          id: 56,
          user_id: 5,
          body: 'cum esse odio nihil reiciendis illum quaerat\nest facere quia\noccaecati sit totam fugiat in beatae\nut occaecati unde vitae nihil quidem consequatur'
        },
        {
          post_id: 12,
          id: 57,
          user_id: 5,
          body: 'dolorem facere itaque fuga odit autem\nperferendis quisquam quis corrupti eius dicta\nrepudiandae error esse itaque aut\ncorrupti sint consequatur aliquid'
        },
        {
          post_id: 12,
          id: 58,
          user_id: 5,
          body: 'veritatis qui nihil\nquia reprehenderit non ullam ea iusto\nconsectetur nam voluptas ut temporibus tempore provident error\neos et nisi et voluptate'
        },
        {
          post_id: 12,
          id: 59,
          user_id: 5,
          body: 'cumque molestiae officia aut fugiat nemo autem\nvero alias atque sed qui ratione quia\nrepellat vel earum\nea laudantium mollitia'
        },
        {
          post_id: 12,
          id: 60,
          user_id: 6,
          body: 'error eum quia voluptates alias repudiandae\naccusantium veritatis maiores assumenda\nquod impedit animi tempore veritatis\nanimi et et officiis labore impedit blanditiis repudiandae'
        },
        {
          post_id: 13,
          id: 61,
          user_id: 6,
          body: 'deserunt cumque laudantium\net et odit quia sint quia quidem\nquibusdam debitis fuga in tempora deleniti\nimpedit consequatur veniam reiciendis autem porro minima'
        },
        {
          post_id: 13,
          id: 62,
          user_id: 6,
          body: 'tempore dolorum corrupti facilis\npraesentium sunt iste recusandae\nunde quisquam similique\nalias consequuntur voluptates velit'
        },
        {
          post_id: 13,
          id: 63,
          user_id: 6,
          body: 'aut eligendi et molestiae voluptatum tempora\nofficia nihil sit voluptatem aut deleniti\nquaerat consequatur eaque\nsapiente tempore commodi tenetur rerum qui quo'
        },
        {
          post_id: 13,
          id: 64,
          user_id: 6,
          body: 'sed illum quis\nut aut culpa labore aspernatur illo\ndolorem quia vitae ut aut quo repellendus est omnis\nesse at est debitis'
        },
        {
          post_id: 13,
          id: 65,
          user_id: 6,
          body: 'qui debitis vitae ratione\ntempora impedit aperiam porro molestiae placeat vero laboriosam recusandae\npraesentium consequatur facere et itaque quidem eveniet\nmagnam natus distinctio sapiente'
        },
        {
          post_id: 14,
          id: 66,
          user_id: 6,
          body: 'necessitatibus libero occaecati\nvero inventore iste assumenda veritatis\nasperiores non sit et quia omnis facere nemo explicabo\nodit quo nobis porro'
        },
        {
          post_id: 14,
          id: 67,
          user_id: 6,
          body: 'nulla quo itaque beatae ad\nofficiis animi aut exercitationem voluptatum dolorem doloremque ducimus in\nrecusandae officia consequuntur quas\naspernatur dolores est esse dolores sit illo laboriosam quaerat'
        },
        {
          post_id: 14,
          id: 68,
          user_id: 6,
          body: 'sed magni accusantium numquam quidem omnis et voluptatem beatae\nquos fugit libero\nvel ipsa et nihil recusandae ea\niste nemo qui optio sit enim ut nostrum odit'
        },
        {
          post_id: 14,
          id: 69,
          user_id: 6,
          body: 'omnis dolor autem qui est natus\nautem animi nemo voluptatum aut natus accusantium iure\ninventore sunt ea tenetur commodi suscipit facere architecto consequatur\ndolorem nihil veritatis consequuntur corporis'
        },
        {
          post_id: 14,
          id: 70,
          user_id: 7,
          body: 'omnis aliquam praesentium ad voluptatem harum aperiam dolor autem\nhic asperiores quisquam ipsa necessitatibus suscipit\npraesentium rem deserunt et\nfacere repellendus aut sed fugit qui est'
        },
        {
          post_id: 15,
          id: 71,
          user_id: 7,
          body: 'mollitia magnam et\nipsum consequatur est expedita\naut rem ut ex doloremque est vitae est\ncumque velit recusandae numquam libero dolor fuga fugit a'
        },
        {
          post_id: 15,
          id: 72,
          user_id: 7,
          body: 'quisquam voluptas ut\npariatur eos amet non\nreprehenderit voluptates numquam\nin est voluptatem dicta ipsa qui esse enim'
        },
        {
          post_id: 15,
          id: 73,
          user_id: 7,
          body: 'nam qui possimus deserunt\ninventore dignissimos nihil rerum ut consequatur vel architecto\ntenetur recusandae voluptate\nnumquam dignissimos aliquid ut reprehenderit voluptatibus'
        },
        {
          post_id: 15,
          id: 74,
          user_id: 7,
          body: 'non accusamus eum aut et est\naccusantium animi nesciunt distinctio ea quas quisquam\nsit ut voluptatem modi natus sint\nfacilis est qui molestias recusandae nemo'
        },
        {
          post_id: 15,
          id: 75,
          user_id: 7,
          body: 'natus numquam enim asperiores doloremque ullam et\nest molestias doloribus cupiditate labore vitae aut voluptatem\nitaque quos quo consectetur nihil illum veniam\nnostrum voluptatum repudiandae ut'
        },
        {
          post_id: 16,
          id: 76,
          user_id: 7,
          body: 'sunt qui consequatur similique recusandae repellendus voluptates eos et\nvero nostrum fugit magnam aliquam\nreprehenderit nobis voluptatem eos consectetur possimus\net perferendis qui ea fugiat sit doloremque'
        },
        {
          post_id: 16,
          id: 77,
          user_id: 8,
          body: 'eos ullam dolorem impedit labore mollitia\nrerum non dolores\nmolestiae dignissimos qui maxime sed voluptate consequatur\ndoloremque praesentium magnam odio iste quae totam aut'
        },
        {
          post_id: 16,
          id: 78,
          user_id: 8,
          body: 'qui adipisci eveniet excepturi iusto magni et\nenim ducimus asperiores blanditiis nemo\ncommodi nihil ex\nenim rerum vel nobis nostrum et non'
        },
        {
          post_id: 16,
          id: 79,
          user_id: 8,
          body: 'et inventore sapiente sed\nsunt similique fugiat officia velit doloremque illo eligendi quas\nsed rerum in quidem perferendis facere molestias\ndolore dolor voluptas nam vel quia'
        },
        {
          post_id: 16,
          id: 80,
          user_id: 8,
          body: 'dignissimos itaque ab et tempore odio omnis voluptatem\nitaque perferendis rem repellendus tenetur nesciunt velit\nqui cupiditate recusandae\nquis debitis dolores aliquam nam'
        },
      ]);
    });
};