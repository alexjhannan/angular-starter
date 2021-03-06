import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import RepoListComponent from './components/repoList/repoList.component';
import UserDisplayComponent from './components/userDisplay/userDisplay.component';
import GithubService from './services/githubService.service';

@Component({
    selector: 'repo-lookup',
    styles: [require('./repoLookup.component.scss')],
    template: require('./repoLookup.component.html'),
    directives: [RepoListComponent, UserDisplayComponent],
    providers: [GithubService]
})

export default class SampleFormComponent {
    private gitUser: Object = {test: "hey"};
    private subscription: any;

    constructor (private githubService: GithubService, private store: Store<any>) {
        this.subscription = this.store
            .select('gitUser')
            .subscribe(gitUser => this.gitUser = gitUser);
    };

    private getUserAndRepos = (name: string) => {
        return this.githubService.getGitUser(name);
    };
}
