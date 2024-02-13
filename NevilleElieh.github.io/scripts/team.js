var teamMembers = []
const teamJSON = "./JSON/team.json"

function createMember(member) {
    return(
        `
        <div class="member-container" id=${member.name}>
            <img src="./assets/team/${member.pfp}" alt="" class="pfp">
            <h3>${member.name}</h3>
            <div>
                <a href=${member.linkedin}><i class="fa-brands fa-linkedin"></i></a>
                <a href="${member.github}"><i class="fa-brands fa-github"></i></a>
            </div>
            <p class="member-bio">${member.bio}</p>
        </div>
        `
    );
}

function getMembers(members) {
    members.forEach(element => {
        teamMembers.push(createMember(element));
    });
}

$.getJSON(teamJSON, function(data) {
    getMembers(data);
    console.log(teamMembers);
    teamMembers = teamMembers.join('')
    $('#team-container').html(teamMembers)
})