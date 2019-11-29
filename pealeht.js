//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;

images[0] = '<h2>Shawshanki lunastus</h2><img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3290/3290236_sa.jpg" alt="Shawhanki lunastus" class="center"><p>Neljakümnendad. Edukas pankur Andy (Tim Robbins) mõistetakse süüdi enda naise ning tolle armukese mõrvas. Ta saadetakse range reziimiga Shawshanki vanglasse, mille "põlised asukad" ei usu, et kidakeelne ning õbluke uustulnuk seal päevagi vastu peab. Kuid visa noormees ei loobu kergelt ning kohaneb ajapikku teiste vangide ning karmikäelise ülemusega. Tal on see ülioluline, mis teistel puudub - lootus ning unistused ...</p>';

index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done